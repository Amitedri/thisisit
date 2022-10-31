"use strict";

var express = require('express');

var path = require('path');

var child_process = require('child_process');

var compression = require('compression');

var fs = require('fs');

var app = express();

var services = require('./src/Data/Services');

var previewContracts = require('./src/Data/ContractExport');

var axios = require('axios');

var bodyParser = require('body-parser');

var cors = require('cors');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cecotechside@gmail.com',
    pass: 'eyzpppoxkxbeqsmb'
  }
});

var makeMessageEmailTemplate = function makeMessageEmailTemplate(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      email = _ref.email,
      message = _ref.message;
  return "<html dir=\"rtl\" lang=\"he\">\n  <head>\n      <style>\n      body{\n        display:flex !important;\n        flexDirection:column !important;\n        justify-content:center !important;\n        align-items:center !important;\n        text-align:center !important;\n      }\n          div{\n            display:block !important;\n            text-align:center !important;\n  \n          }\n          \n          .total{\n            text-align:center !important;\n            display:block !important;\n\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <h1 class\"total\">\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D7\u05D3\u05E9\u05D4 </h1>\n  <div class\"total\">\u05E9\u05DD \u05DE\u05DC\u05D0: ".concat(name, "</div>\n  <div class\"total\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class\"total\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class\"total\">\u05D4\u05D5\u05D3\u05E2\u05D4 - ").concat(message, "</span>\n  </body>\n  </html>");
};

var CustomePackContent = function CustomePackContent(_ref2) {
  var name = _ref2.name;
  return "   <div class='total'>\u05D4\u05D9\u05D9 ".concat(name, ",</div><br/>\n  <div class=\"total\">\u05EA\u05D5\u05D3\u05D4 \u05E2\u05DC \u05D4\u05D0\u05DE\u05D5\u05DF \u05D5\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8.</div><br/>\n\n<div class='total'>\u05E8\u05DB\u05D9\u05E9\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA\" \u05E2\u05D1\u05D5\u05E8 \"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05DE\u05E2\u05E0\u05D9\u05E7\u05D4 \u05DC\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4 \u05D1\u05EA \u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4 \u05E2\u05DD \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05DE\u05D4\u05DE\u05E9\u05E8\u05D3 \u05E9\u05D1\u05D4 \u05D4\u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D9\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05DC\u05E0\u05E1\u05D7 \u05D5\u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05E1\u05E2\u05D9\u05E4\u05D9\u05DD \u05DC\u05E4\u05D9 \u05D3\u05E8\u05D9\u05E9\u05EA\u05DA \u05DC\u05DC\u05D0 \u05D1\u05D7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05DE\u05DC\u05D5\u05D0 \u05D4\u05E0\u05E1\u05D9\u05D1\u05D5\u05EA \u05D5\u05D4\u05E2\u05D5\u05D1\u05D3\u05D5\u05EA \u05D4\u05E7\u05E9\u05D5\u05E8\u05D5\u05EA \u05DC\u05E2\u05E8\u05D9\u05DB\u05EA \u05D4\u05D4\u05E1\u05DB\u05DD \u05D5/\u05D0\u05D5 \u05DC\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05EA\u05D9\u05E7\u05D5\u05DF \u05D4\u05E0\u05D9\u05E1\u05D5\u05D7. </div><br/>\n<div class='total'>\u05DC\u05DE\u05D9\u05D9\u05DC \u05D6\u05D4 \u05DE\u05E6\u05D5\u05E8\u05E3 \u05E7\u05D5\u05D1\u05E5 \"\u05D5\u05D5\u05E8\u05D3\" \u05D5\u05D1\u05D5 \u05D4\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D4\u05D6\u05DE\u05E0\u05D4. \u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05E0\u05E1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E9\u05DC \u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05E1\u05DB\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA, \u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D9\u05E9\u05DE\u05D7 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05D1\u05DB\u05DA.</div><br/>\n<div class='total'>\u05DC\u05E0\u05D5\u05D7\u05D9\u05D5\u05EA\u05DA, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA\" \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05D7\u05EA \u05D8\u05DC\u05E4\u05D5\u05DF, \u05E4\u05D2\u05D9\u05E9\u05EA \u05D6\u05D5\u05DD, \u05D0\u05D5, \u05E4\u05D2\u05D9\u05E9\u05D4 \u05E4\u05D9\u05D6\u05D9\u05EA \u05D1\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5.</div><br/>\n<div class='total'>\u05D1\u05DB\u05E4\u05D5\u05E3 \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D9\u05EA\u05D0\u05DD \u05D0\u05D9\u05EA\u05DA \u05DE\u05D5\u05E2\u05D3 \u05DC\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D4\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05EA\u05D5\u05DA \u05D9\u05D5\u05DD \u05E2\u05E1\u05E7\u05D9\u05DD \u05E2\u05D5\u05E7\u05D1 \u05DE\u05D9\u05D5\u05DD \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4.</div><br/>\n<div class='total'>\u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D9\u05DE\u05D9\u05DD \u05D0'-\u05D4' 20:00 - 08:00 \u05D9\u05DE\u05D9 \u05D5' \u05D5\u05E2\u05E8\u05D1\u05D9 \u05D7\u05D2 13:00 - 08:00.</div><br/>\n<div class='total'>\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E9\u05DC\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05DE\u05D9\u05D9\u05DC: office@ceco.co.il \u05D0\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF 050-8081119. \n</div><br/>\n<div class='total'>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D9\u05D9\u05E2\u05DC \u05D0\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA\" \u05D9\u05E9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05DE\u05D9\u05D9\u05DC \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA office@ceco.co.il.</div><br/>\n<div class='total'></div><br/>");
};

var MeetingPackContent = function MeetingPackContent(_ref3) {
  var name = _ref3.name;
  return "<div class='total'>\u05D4\u05D9\u05D9 ".concat(name, ",</div><br/>\n  <div class=\"total\">\u05EA\u05D5\u05D3\u05D4 \u05E2\u05DC \u05D4\u05D0\u05DE\u05D5\u05DF \u05D5\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8.</div><br/>\n\n  <div class=\"total\">\u05E8\u05DB\u05D9\u05E9\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\" \u05DE\u05E2\u05E0\u05D9\u05E7\u05D4 \u05DC\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4 \u05D1\u05EA \u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9 \u05E2\u05DD \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05DE\u05D4\u05DE\u05E9\u05E8\u05D3 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05DB\u05E0\u05EA \u05D4\u05E1\u05DB\u05DD \u05DE\u05D9\u05D8\u05D1\u05D9 \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05E0\u05E1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E9\u05D4\u05D5\u05D1\u05D9\u05DC\u05D5 \u05DC\u05E2\u05E8\u05D9\u05DB\u05EA \u05D4\u05D4\u05E1\u05DB\u05DD.   \n  </div>\n  <div class=\"total\">\u05DC\u05E0\u05D5\u05D7\u05D9\u05D5\u05EA\u05DA, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA\" \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \u05D6\u05D5\u05DD, \u05D0\u05D5, \u05E4\u05D2\u05D9\u05E9\u05D4 \u05E4\u05D9\u05D6\u05D9\u05EA \u05D1\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5.\n  </div>\n  <div class=\"total\">\u05D1\u05DB\u05E4\u05D5\u05E3 \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D9\u05EA\u05D0\u05DD \u05D0\u05D9\u05EA\u05DA \u05DE\u05D5\u05E2\u05D3 \u05DC\u05E4\u05D2\u05D9\u05E9\u05EA \u05D4\u05D9\u05D9\u05E2\u05D5\u05E5 \u05EA\u05D5\u05DA \u05D9\u05D5\u05DD \u05E2\u05E1\u05E7\u05D9\u05DD \u05E2\u05D5\u05E7\u05D1 \u05DE\u05D9\u05D5\u05DD \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4.\n  </div>\n  <div class=\"total>\u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D9\u05DE\u05D9\u05DD \u05D0'-\u05D4' 20:00 - 08:00 \u05D9\u05DE\u05D9 \u05D5' \u05D5\u05E2\u05E8\u05D1\u05D9 \u05D7\u05D2 13:00 - 08:00.\n  </div>\n<div class='total'>\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E9\u05DC\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05DE\u05D9\u05D9\u05DC: office@ceco.co.il \u05D0\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF 050-8081119. \n</div><br/>\n<div class='total'>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D9\u05D9\u05E2\u05DC \u05D0\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA\" \u05D9\u05E9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05DE\u05D9\u05D9\u05DC \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA office@ceco.co.il.</div><br/>\n<div class='total'></div><br/>");
};

var MekifPackContent = function MekifPackContent(_ref4) {
  var name = _ref4.name;
  return "   <div class='total'>\u05D4\u05D9\u05D9 ".concat(name, ",</div><br/>\n  <div class=\"total\">\u05EA\u05D5\u05D3\u05D4 \u05E2\u05DC \u05D4\u05D0\u05DE\u05D5\u05DF \u05D5\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8.</div><br/>\n<div class='total'>\u05DC\u05DE\u05D9\u05D9\u05DC \u05D6\u05D4 \u05DE\u05E6\u05D5\u05E8\u05E3 \u05E7\u05D5\u05D1\u05E5 \"\u05D5\u05D5\u05E8\u05D3\" \u05D5\u05D1\u05D5 \u05D4\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D4\u05D6\u05DE\u05E0\u05D4. \u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05E0\u05E1\u05D9\u05D1\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E9\u05DC \u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05E1\u05DB\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA, \u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D9\u05E9\u05DE\u05D7 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05D1\u05DB\u05DA.</div><br/>\n\n<div class='total'>\u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D9\u05DE\u05D9\u05DD \u05D0'-\u05D4' 20:00 - 08:00 \u05D9\u05DE\u05D9 \u05D5' \u05D5\u05E2\u05E8\u05D1\u05D9 \u05D7\u05D2 13:00 - 08:00.</div><br/>\n<div class='total'>\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E9\u05DC\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05DE\u05D9\u05D9\u05DC: office@ceco.co.il \u05D0\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF 050-8081119. \n</div><br/>\n<div class='total'>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D9\u05D9\u05E2\u05DC \u05D0\u05EA \u05E4\u05D2\u05D9\u05E9\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA\" \u05D9\u05E9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05DE\u05D9\u05D9\u05DC \u05D4\u05DE\u05E9\u05E8\u05D3 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA office@ceco.co.il.</div><br/>\n<div class='total'></div><br/>");
};

var makeMeetingProductEmailTemplate = function makeMeetingProductEmailTemplate(_ref5) {
  var name = _ref5.name,
      phone = _ref5.phone,
      email = _ref5.email,
      productName = _ref5.productName,
      pack = _ref5.pack,
      description = _ref5.description,
      total = _ref5.total;
  var time = new Date().toLocaleTimeString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  });
  var date = new Date().toLocaleDateString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  }).replace(/\D/g, '/');
  return "<html dir=\"rtl\" lang=\"he\">\n  <head>\n      <style>\n      body{\n                width:80% !important;\n                margin:auto;\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n            direction: rtl !important;\n      }\n          div{\n            display:block !important;  \n          }\n          \n          .center{\n            text-align:center !important;\n\n          }\n          .total{\n            text-align:end !important;\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <div class='center'><img src=\"https://ceco.co.il/assets/img/emailLogo.png\" height=\"150\" width=\"350\"/></div>\n  ".concat(MeetingPackContent({
    name: name
  }), "\n  <h1 class=\"center\">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA</h1>\n  <div class=\"center\">\u05E9\u05DD \u05DE\u05DC\u05D0: ").concat(name, "</div>\n  <div class=\"center\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class=\"center\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class=\"center\">\n      \u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8: ").concat(productName, " ").concat(pack, "\n      </span>\n  <div class=\"center\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4: ", 'בטיפול', "</div> \n      <span class=\"center\">\n    \u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD : ").concat(total, " \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE\n      </span>\n      <div class=\"center\">").concat(date, "-").concat(time, "</div>\n\n      <span class=\"center\">\n      \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D1\u05D2\u05D9\u05DF \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05EA\u05E9\u05DC\u05D7 \u05D1\u05DE\u05D9\u05D9\u05DC \u05E0\u05E4\u05E8\u05D3. \u05DB\u05DB\u05DC \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D9\u05E9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D5\u05E0\u05E9\u05DC\u05D7 \u05D1\u05D4\u05E7\u05D3\u05DD.\n      </span>\n      <div class='center'><img src=\"https://ceco.co.il/assets/img/thanks.png\" height=\"200\" width=\"500\"/></div>\n      <div class='center'>\u05DB\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05E8\u05DB\u05D9\u05E9\u05EA \"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05D5/\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05DD \u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D0\u05D5 \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05D5 \u05D5\u05D0\u05D9\u05E0\u05DD \u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05E9\u05D5\u05DD \u05DE\u05E7\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA. \u05E8\u05DB\u05D9\u05E9\u05EA\u05DD \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9\u05DD \u05D4\u05DD \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05D2\u05D5\u05DC\u05E9 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05DC\u05D4\u05E1\u05EA\u05DE\u05DA \u05E2\u05DC \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05E8\u05D1\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05D5\u05D0 \u05D0\u05D9\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D5\u05EA \u05E2\u05D9\u05DC\u05D4 \u05DC\u05EA\u05D1\u05D9\u05E2\u05D4 \u05D5/\u05D0\u05D5 \u05D8\u05E2\u05E0\u05D4 \u05D5/\u05D0\u05D5 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. \u05D4\u05DC\u05DB\u05D5\u05EA \u05D5\u05D7\u05D5\u05E7\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA \u05D5\u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05D0 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05D0\u05D5 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9. \u05DC\u05E7\u05D1\u05DC\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA \u05D0\u05D5 \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E7\u05DC\u05D5\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\" \u05D1\u05D0\u05EA\u05E8.</div>\n      <div class='center'>\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E9\u05DB\u05E4\u05DC \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D0\u05DD \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05E4\u05E8\u05E1\u05DD \u05D1\u05DB\u05DC \u05D3\u05E8\u05DA \u05D5/\u05D0\u05D5 \u05DC\u05E6\u05D5\u05E8 \u05E1\u05D5\u05D2 \u05E9\u05DC \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D2\u05D6\u05E8\u05EA \u05DE\"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D5/\u05D0\u05D5 \u05E7\u05D5\u05D1\u05E5 \u05D0\u05D7\u05E8 \u05E9\u05E0\u05E2\u05E8\u05DA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D5/\u05D0\u05D5 \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D0\u05EA\u05E8. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. </div>\n\n\n  </body>\n  </html>");
};

var thanksForMessageEmailTemplate = function thanksForMessageEmailTemplate(_ref6) {
  var name = _ref6.name,
      phone = _ref6.phone,
      email = _ref6.email,
      productName = _ref6.productName,
      pack = _ref6.pack,
      description = _ref6.description,
      total = _ref6.total;
  return "<html dir=\"rtl\" lang=\"he\">\n  <head>\n      <style>\n      body{\n        width:80% !important;\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n            direction: rtl !important;\n      }\n          div{\n            display:block !important;  \n          }\n          \n          .center{\n            text-align:center !important;\n\n          }\n          .total{\n            text-align:end !important;\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <div class='center'><img src=\"https://ceco.co.il/assets/img/emailLogo.png\" height=\"150\" width=\"350\"/></div>\n  ".concat(MekifPackContent({
    name: name
  }), "\n  <h1 class=\"center\">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA</h1>\n  <div class=\"center\">\u05E9\u05DD \u05DE\u05DC\u05D0: ").concat(name, "</div>\n  <div class=\"center\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class=\"center\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class=\"center\">\n      \u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8: ").concat(productName, " ").concat(pack, "\n      </span>\n  <div class=\"center\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4: ", 'בטיפול', "</div> \n      <span class=\"center\">\n    \u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD : ").concat(total, " \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE\n      </span>\n      <div class=\"center\">").concat(date, "-").concat(time, "</div>\n\n      <span class=\"center\">\n      \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D1\u05D2\u05D9\u05DF \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05EA\u05E9\u05DC\u05D7 \u05D1\u05DE\u05D9\u05D9\u05DC \u05E0\u05E4\u05E8\u05D3. \u05DB\u05DB\u05DC \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D9\u05E9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D5\u05E0\u05E9\u05DC\u05D7 \u05D1\u05D4\u05E7\u05D3\u05DD.\n      </span>\n            <div class='center'><img src=\"https://ceco.co.il/assets/img/thanks.png\" height=\"200\" width=\"500\"/></div>\n\n      <div class='center'>\u05DB\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05E8\u05DB\u05D9\u05E9\u05EA \"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05D5/\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05DD \u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D0\u05D5 \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05D5 \u05D5\u05D0\u05D9\u05E0\u05DD \u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05E9\u05D5\u05DD \u05DE\u05E7\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA. \u05E8\u05DB\u05D9\u05E9\u05EA\u05DD \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9\u05DD \u05D4\u05DD \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05D2\u05D5\u05DC\u05E9 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05DC\u05D4\u05E1\u05EA\u05DE\u05DA \u05E2\u05DC \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05E8\u05D1\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05D5\u05D0 \u05D0\u05D9\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D5\u05EA \u05E2\u05D9\u05DC\u05D4 \u05DC\u05EA\u05D1\u05D9\u05E2\u05D4 \u05D5/\u05D0\u05D5 \u05D8\u05E2\u05E0\u05D4 \u05D5/\u05D0\u05D5 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. \u05D4\u05DC\u05DB\u05D5\u05EA \u05D5\u05D7\u05D5\u05E7\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA \u05D5\u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05D0 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05D0\u05D5 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9. \u05DC\u05E7\u05D1\u05DC\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA \u05D0\u05D5 \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E7\u05DC\u05D5\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\" \u05D1\u05D0\u05EA\u05E8.</div>\n      <div class='center'>\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E9\u05DB\u05E4\u05DC \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D0\u05DD \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05E4\u05E8\u05E1\u05DD \u05D1\u05DB\u05DC \u05D3\u05E8\u05DA \u05D5/\u05D0\u05D5 \u05DC\u05E6\u05D5\u05E8 \u05E1\u05D5\u05D2 \u05E9\u05DC \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D2\u05D6\u05E8\u05EA \u05DE\"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D5/\u05D0\u05D5 \u05E7\u05D5\u05D1\u05E5 \u05D0\u05D7\u05E8 \u05E9\u05E0\u05E2\u05E8\u05DA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D5/\u05D0\u05D5 \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D0\u05EA\u05E8. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. </div>\n  </body>\n  </html>");
};

var makeMekifProductEmailTemplate = function makeMekifProductEmailTemplate(_ref7) {
  var name = _ref7.name,
      phone = _ref7.phone,
      email = _ref7.email,
      productName = _ref7.productName,
      pack = _ref7.pack,
      description = _ref7.description,
      total = _ref7.total;
  var time = new Date().toLocaleTimeString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  });
  var date = new Date().toLocaleDateString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  }).replace(/\D/g, '/');
  var string = "".concat(date, "-").concat(time);
  return "<html dir=\"rtl\" lang=\"he\">\n  <head>\n      <style>\n      body{\n        width:80% !important;\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n            direction: rtl !important;\n      }\n          div{\n            display:block !important;  \n          }\n          \n          .center{\n            text-align:center !important;\n\n          }\n          .total{\n            text-align:end !important;\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <div class='center'><img src=\"https://ceco.co.il/assets/img/emailLogo.png\" height=\"150\" width=\"350\"/></div>\n  ".concat(MekifPackContent({
    name: name
  }), "\n  <h1 class=\"center\">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA</h1>\n  <div class=\"center\">\u05E9\u05DD \u05DE\u05DC\u05D0: ").concat(name, "</div>\n  <div class=\"center\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class=\"center\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class=\"center\">\n      \u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8: ").concat(productName, " ").concat(pack, "\n      </span>\n  <div class=\"center\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4: ", 'בטיפול', "</div> \n      <span class=\"center\">\n    \u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD : ").concat(total, " \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE\n      </span>\n      <div class=\"center\">").concat(date, "-").concat(time, "</div>\n\n      <span class=\"center\">\n      \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D1\u05D2\u05D9\u05DF \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05EA\u05E9\u05DC\u05D7 \u05D1\u05DE\u05D9\u05D9\u05DC \u05E0\u05E4\u05E8\u05D3. \u05DB\u05DB\u05DC \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D9\u05E9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D5\u05E0\u05E9\u05DC\u05D7 \u05D1\u05D4\u05E7\u05D3\u05DD.\n      </span>\n            <div class='center'><img src=\"https://ceco.co.il/assets/img/thanks.png\" height=\"200\" width=\"500\"/></div>\n\n      <div class='center'>\u05DB\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05E8\u05DB\u05D9\u05E9\u05EA \"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05D5/\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05DD \u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D0\u05D5 \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05D5 \u05D5\u05D0\u05D9\u05E0\u05DD \u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05E9\u05D5\u05DD \u05DE\u05E7\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA. \u05E8\u05DB\u05D9\u05E9\u05EA\u05DD \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9\u05DD \u05D4\u05DD \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05D2\u05D5\u05DC\u05E9 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05DC\u05D4\u05E1\u05EA\u05DE\u05DA \u05E2\u05DC \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05E8\u05D1\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05D5\u05D0 \u05D0\u05D9\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D5\u05EA \u05E2\u05D9\u05DC\u05D4 \u05DC\u05EA\u05D1\u05D9\u05E2\u05D4 \u05D5/\u05D0\u05D5 \u05D8\u05E2\u05E0\u05D4 \u05D5/\u05D0\u05D5 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. \u05D4\u05DC\u05DB\u05D5\u05EA \u05D5\u05D7\u05D5\u05E7\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA \u05D5\u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05D0 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05D0\u05D5 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9. \u05DC\u05E7\u05D1\u05DC\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA \u05D0\u05D5 \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E7\u05DC\u05D5\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\" \u05D1\u05D0\u05EA\u05E8.</div>\n      <div class='center'>\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E9\u05DB\u05E4\u05DC \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D0\u05DD \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05E4\u05E8\u05E1\u05DD \u05D1\u05DB\u05DC \u05D3\u05E8\u05DA \u05D5/\u05D0\u05D5 \u05DC\u05E6\u05D5\u05E8 \u05E1\u05D5\u05D2 \u05E9\u05DC \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D2\u05D6\u05E8\u05EA \u05DE\"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D5/\u05D0\u05D5 \u05E7\u05D5\u05D1\u05E5 \u05D0\u05D7\u05E8 \u05E9\u05E0\u05E2\u05E8\u05DA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D5/\u05D0\u05D5 \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D0\u05EA\u05E8. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. </div>\n  </body>\n  </html>");
};

var makeCustomProductEmailTemplate = function makeCustomProductEmailTemplate(_ref8) {
  var name = _ref8.name,
      phone = _ref8.phone,
      email = _ref8.email,
      productName = _ref8.productName,
      pack = _ref8.pack,
      description = _ref8.description,
      total = _ref8.total;
  var time = new Date().toLocaleTimeString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  });
  var date = new Date().toLocaleDateString('he-IL', {
    timeZone: 'Asia/Jerusalem'
  }).replace(/\D/g, '/');
  return "<html dir=\"rtl\" lang=\"he\">\n  <head>\n      <style>\n      body{\nwidth:80% !important;\n margin:auto;\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n            direction: rtl !important;\n      }\n          div{\n            display:block !important;  \n          }\n          .center{\n            text-align:center !important;\n            direction:rtl  !important;\n\n          }\n          .total{\n            \n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <div class='total'><img src=\"https://ceco.co.il/assets/img/emailLogo.png\" height=\"150\" width=\"350\"/></div>\n  ".concat(CustomePackContent({
    name: name
  }), "\n  <h1 class=\"center\">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA</h1>\n  <div class=\"center\">\u05E9\u05DD \u05DE\u05DC\u05D0: ").concat(name, "</div>\n  <div class=\"center\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class=\"center\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class=\"center\">\n      \u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8: ").concat(productName, " ").concat(pack, "\n      </span>\n  <div class=\"center\">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4: ", 'בטיפול', "</div> \n      <span class=\"center\">\n    \u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD : ").concat(total, " \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE\n      </span>\n      <div class=\"center\">").concat(date, "-").concat(time, "</div>\n\n      <span class=\"center\">\n      \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D1\u05D2\u05D9\u05DF \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05EA\u05E9\u05DC\u05D7 \u05D1\u05DE\u05D9\u05D9\u05DC \u05E0\u05E4\u05E8\u05D3. \u05DB\u05DB\u05DC \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D9\u05E9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3\u05E0\u05D5 \u05D5\u05E0\u05E9\u05DC\u05D7 \u05D1\u05D4\u05E7\u05D3\u05DD.\n      </span>\n            <div class='center'><img src=\"https://ceco.co.il/assets/img/thanks.png\" height=\"200\" width=\"500\"/></div>\n\n      <div class='center'>\u05DB\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8, \u05E8\u05DB\u05D9\u05E9\u05EA \"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05D5/\u05D0\u05D5 \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05DD \u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D0\u05D5 \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05D5 \u05D5\u05D0\u05D9\u05E0\u05DD \u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05E9\u05D5\u05DD \u05DE\u05E7\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA. \u05E8\u05DB\u05D9\u05E9\u05EA\u05DD \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9\u05DD \u05D4\u05DD \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05D2\u05D5\u05DC\u05E9 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05DC\u05D4\u05E1\u05EA\u05DE\u05DA \u05E2\u05DC \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05E8\u05D1\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05D5\u05D0 \u05D0\u05D9\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D5\u05EA \u05E2\u05D9\u05DC\u05D4 \u05DC\u05EA\u05D1\u05D9\u05E2\u05D4 \u05D5/\u05D0\u05D5 \u05D8\u05E2\u05E0\u05D4 \u05D5/\u05D0\u05D5 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. \u05D4\u05DC\u05DB\u05D5\u05EA \u05D5\u05D7\u05D5\u05E7\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA \u05D5\u05E2\u05DC \u05DB\u05DF \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8 \u05D1\"\u05D4\u05E1\u05DB\u05DD \u05D4\u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05D0 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05D0\u05D5 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9. \u05DC\u05E7\u05D1\u05DC\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA \u05D0\u05D5 \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E7\u05DC\u05D5\u05EA \u05D7\u05D1\u05D9\u05DC\u05EA \"\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9\" \u05D1\u05D0\u05EA\u05E8.</div>\n      <div class='center'>\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E9\u05DB\u05E4\u05DC \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D0\u05DD \u05D1\u05EA\u05DE\u05D5\u05E8\u05D4 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0\u05D5 \u05D5/\u05D0\u05D5 \u05DC\u05E4\u05E8\u05E1\u05DD \u05D1\u05DB\u05DC \u05D3\u05E8\u05DA \u05D5/\u05D0\u05D5 \u05DC\u05E6\u05D5\u05E8 \u05E1\u05D5\u05D2 \u05E9\u05DC \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D2\u05D6\u05E8\u05EA \u05DE\"\u05D4\u05E1\u05DB\u05DD \u05DE\u05E7\u05D9\u05E3\" \u05DE\u05DB\u05DC \u05E1\u05D5\u05D2 \u05D5/\u05D0\u05D5 \u05E7\u05D5\u05D1\u05E5 \u05D0\u05D7\u05E8 \u05E9\u05E0\u05E2\u05E8\u05DA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' \u05D5/\u05D0\u05D5 \u05E9\u05E0\u05E8\u05DB\u05E9 \u05D1\u05D0\u05EA\u05E8. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA'. </div>\n  </body>\n  </html>");
};

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/assets', express["static"](path.join(__dirname, 'build/assets')));
app.use('/static', express["static"](path.join(__dirname, 'build/static')));
app.post('/message', function _callee(req, res) {
  var _req$body, name, email, phone, message, messageTemplate;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!req.body.hasOwnProperty('message') || !req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('phone'))) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(401).send('request denied'));

        case 2:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, phone = _req$body.phone, message = _req$body.message;
          messageTemplate = makeMessageEmailTemplate({
            email: email,
            name: name,
            phone: phone,
            message: message
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(sendEmail({
            data: messageTemplate,
            name: name,
            phone: phone,
            subject: "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05DE\u05D4\u05D0\u05EA\u05E8 \u05DE - ".concat(name),
            mail: 'coelad6@gmail.com'
          }));

        case 6:
          res.status(200).send('request.body');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});

var sendEmail = function sendEmail(_ref9) {
  var name, phone, data, subject, mail, result;
  return regeneratorRuntime.async(function sendEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          name = _ref9.name, phone = _ref9.phone, data = _ref9.data, subject = _ref9.subject, mail = _ref9.mail;
          _context2.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: 'office@ceco.co.il',
            // to: "Sale@hareli.co.il
            to: mail,
            subject: subject,
            html: data,
            encoding: 'utf8'
          }));

        case 3:
          result = _context2.sent;
          console.log(result);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var sendEmailWithoutAttachment = function sendEmailWithoutAttachment(_ref10) {
  var data, subject, target, result;
  return regeneratorRuntime.async(function sendEmailWithoutAttachment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = _ref10.data, subject = _ref10.subject, target = _ref10.target;
          _context3.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            // from: 'office@ceco.co.il',
            // to: "Sale@hareli.co.il
            to: target,
            subject: subject,
            html: data,
            encoding: 'utf8'
          }));

        case 3:
          result = _context3.sent;
          console.log(result);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var sendEmailWithAttachment = function sendEmailWithAttachment(_ref11) {
  var data, subject, contractName, target, result;
  return regeneratorRuntime.async(function sendEmailWithAttachment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          data = _ref11.data, subject = _ref11.subject, contractName = _ref11.contractName, target = _ref11.target;
          _context4.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            // from: 'office@ceco.co.il',
            // to: "Sale@hareli.co.il
            to: target,
            subject: subject,
            html: data,
            encoding: 'utf8',
            attachments: [{
              filename: "".concat(contractName, ".pdf"),
              content: fs.createReadStream(path.resolve(__dirname, 'public', 'assets', 'files', "".concat(contractName, ".pdf")))
            }]
          }));

        case 3:
          result = _context4.sent;
          console.log(result);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

app.post('/paymentdone', function (req, res) {
  if (!req.body.hasOwnProperty('clientData') || !req.body.hasOwnProperty('products')) {
    return res.status(401).send('request denied');
  }

  var _req$body2 = req.body,
      products = _req$body2.products,
      clientData = _req$body2.clientData;
  products.forEach(function _callee2(el) {
    var template, email, _template, _email, _template2, _email2;

    return regeneratorRuntime.async(function _callee2$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(el);

            if (!(el.pack == 'מקיף')) {
              _context5.next = 7;
              break;
            }

            template = makeMekifProductEmailTemplate({
              description: '',
              email: clientData.email,
              name: clientData.name,
              pack: el.pack,
              phone: clientData.phone,
              productName: el.name,
              total: "".concat(el.price, "\u20AA")
            });
            _context5.next = 5;
            return regeneratorRuntime.awrap(sendEmailWithAttachment({
              subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
              data: template,
              contractName: el.name,
              target: clientData.email
            }));

          case 5:
            email = _context5.sent;
            console.log(email);

          case 7:
            if (!(el.pack == 'התאמה אישית')) {
              _context5.next = 13;
              break;
            }

            _template = makeCustomProductEmailTemplate({
              description: '',
              email: clientData.email,
              name: clientData.name,
              pack: el.pack,
              phone: clientData.phone,
              productName: el.name,
              total: "".concat(el.price, "\u20AA")
            });
            _context5.next = 11;
            return regeneratorRuntime.awrap(sendEmailWithoutAttachment({
              subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
              data: _template,
              target: clientData.email
            }));

          case 11:
            _email = _context5.sent;
            console.log(_email);

          case 13:
            if (!(el.pack == 'פגישת ייעוץ')) {
              _context5.next = 19;
              break;
            }

            _template2 = makeMeetingProductEmailTemplate({
              description: '',
              email: clientData.email,
              name: clientData.name,
              pack: el.pack,
              phone: clientData.phone,
              productName: el.name,
              total: "".concat(el.price, "\u20AA")
            });
            _context5.next = 17;
            return regeneratorRuntime.awrap(sendEmailWithoutAttachment({
              subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
              data: _template2,
              target: clientData.email
            }));

          case 17:
            _email2 = _context5.sent;
            console.log(_email2);

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    });
  }); //send email templates

  return res.status(200).send('received');
});
app.post('/payment', function _callee3(req, res) {
  var total, _req$body$clientData, name, phone, email, paymentMethod, paymentsNum, products, cardUrl, bitUrl, url, tokenReq;

  return regeneratorRuntime.async(function _callee3$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          total = 0;
          _req$body$clientData = req.body.clientData, name = _req$body$clientData.name, phone = _req$body$clientData.phone, email = _req$body$clientData.email, paymentMethod = _req$body$clientData.paymentMethod, paymentsNum = _req$body$clientData.paymentsNum;
          products = req.body.products;
          products.forEach(function (el) {
            var item = previewContracts.filter(function (elem) {
              return elem.id == el.id;
            });

            if (item == false) {
              total += 0;
              console.log('fake item');
            }

            if (item.length == 1) {
              console.log('found item');

              if (el.pack === 'מקיף') {
                total += parseFloat(item[0].priceMekif);
              }

              if (el.pack === 'התאמה אישית') {
                total += parseFloat(item[0].priceCustom);
              }

              if (el.pack === 'פגישת ייעוץ') {
                total += parseFloat(item[0].priceMeeting);
              }
            }
          });
          cardUrl = "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=f129ea785b71&userId=aee113fccf3ed35b&apiKey=&sum=".concat(total, "&cFields1=12345678&successUrl=https://www.ceco.co.il/paymentres/success&cancelUrl=https://www.ceco.co.il/paymentres/failed&description=", 'test payment', "&paymentNum=").concat(paymentsNum, "&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=").concat(name, " &pageField[phone]=").concat(phone, "&pageField[email]=").concat(email);
          bitUrl = "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=e428a2740341&userId=aee113fccf3ed35b&apiKey=&sum=".concat(total, "&cFields1=12345678&successUrl=https://www.ceco.co.il/paymentres/success&cancelUrl=https://www.ceco.co.il/paymentres/failed&description=", 'test payment', "\n  &paymentNum=").concat(paymentsNum, "&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=").concat(name, "&pageField[phone]=").concat(phone, "&pageField[email]=").concat(email);
          url = paymentMethod === 'card' ? cardUrl : bitUrl;
          url = encodeURI(url);
          _context6.next = 10;
          return regeneratorRuntime.awrap(axios.get(url));

        case 10:
          tokenReq = _context6.sent;

          if (!(total > 0)) {
            _context6.next = 13;
            break;
          }

          return _context6.abrupt("return", res.status(200).send({
            url: tokenReq.data.data.url,
            products: products,
            clientData: req.body.clientData
          }));

        case 13:
          return _context6.abrupt("return", res.status(200).send("invalid req"));

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.post('/paymentaccept', function (req, res) {
  console.log('paymentaccept');
  console.log(req.body);
  res.send('ok');
});
app.get('*', function (req, res) {
  var splittedParams = Object.values(req.params)[0].split('/');
  var isContract = splittedParams.includes('contract');

  if (isContract) {
    var id = splittedParams[2];
    var contract = previewContracts.filter(function (el) {
      return el.id == id;
    })[0];

    var _html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo = _html.toString().replace('__SEO_TITLE__', contract.seoHeader).replace('__SEO_DESCRIPTION__', contract.seoDescription);

    return res.send(_htmlWithSeo);
  }

  var isService = splittedParams.includes('service');

  if (isService) {
    var _id = splittedParams[2];
    var service = services.filter(function (el) {
      return el.id == _id;
    })[0];

    var _html2 = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo2 = _html2.toString().replace('__SEO_TITLE__', service.seoHeader).replace('__SEO_DESCRIPTION__', service.seoDescription);

    return res.send(_htmlWithSeo2);
  }

  var isContractGeneral = splittedParams.includes('contracts');

  if (isContractGeneral) {
    var _html3 = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo3 = _html3.toString().replace('__SEO_TITLE__', 'הסכמים לדוגמא - מידע מקיף וייעוץ ראשוני עורך דין הסכמים וחוזים / עורך דין הסכמים אלעד כהן').replace('__SEO_DESCRIPTION__', 'ניסוח הסכמים - רכישת הסכם מקיף בכל תחום משפטי במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית  - שירות מקצועי ומהיר - הכנסו לאתר וצרו קשר כעת ');

    return res.send(_htmlWithSeo3);
  }

  var isServicesGeneral = splittedParams.includes('services');

  if (isServicesGeneral) {
    var _html4 = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo4 = _html4.toString().replace('__SEO_TITLE__', "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D0\u05DC\u05E2\u05D3 \u05DB\u05D4\u05DF \u05D5\u05E9\u05D5\u05EA - \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E7\u05D9\u05E3 \u05D5\u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 / \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D5\u05DE\u05D2\u05E9\u05E8 \u05D0\u05DC\u05E2\u05D3 \u05DB\u05D4\u05DF").replace('__SEO_DESCRIPTION__', "\u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05DE\u05E1\u05D7\u05E8\u05D9 - \u05D2\u05D9\u05E9\u05D5\u05E8 - \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D0\u05D6\u05E8\u05D7\u05D9 - \u05DC\u05D9\u05D5\u05D5\u05D9 \u05E2\u05E1\u05E7\u05D0\u05D5\u05EA \u05DE\u05E7\u05E8\u05E7\u05E2\u05D9\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D5\u05DE\u05D4\u05D9\u05E8 - \u05D4\u05DB\u05E0\u05E1\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05D5\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA");

    return res.send(_htmlWithSeo4);
  }

  var islegalGeneral = splittedParams.includes('legal');

  if (islegalGeneral) {
    var _html5 = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo5 = _html5.toString().replace('__SEO_TITLE__', "\u05DE\u05D9\u05D3\u05E2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D0\u05DC\u05E2\u05D3 \u05DB\u05D4\u05DF \u05D5\u05E9\u05D5\u05EA - \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E7\u05D9\u05E3 \u05D5\u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 / \u05E2\u05D5\"\u05D3 \u05D0\u05DC\u05E2\u05D3 \u05DB\u05D4\u05DF ").replace('__SEO_DESCRIPTION__', "\u05DE\u05D3\u05E8\u05D9\u05DA \u05DE\u05E9\u05E4\u05D8\u05D9 \u05DE\u05E7\u05D9\u05E3 \u05D1\u05EA\u05D7\u05D5\u05DE\u05D9 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3 - \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D3\u05D9\u05E0\u05D9 \u05DE\u05E7\u05E8\u05E7\u05E2\u05D9\u05DF - \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D3\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E4\u05D7\u05D4 - \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D3\u05D9\u05E0\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 - \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D3\u05D9\u05E0\u05D9 \u05D7\u05D1\u05E8\u05D5\u05EA \u05D5\u05E1\u05D8\u05D0\u05E8\u05D8 \u05D0\u05E4 - \u05D4\u05DB\u05E0\u05E1\u05D5 \u05DC\u05D0\u05EA\u05E8 \u05D5\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DB\u05E2\u05EA");

    return res.send(_htmlWithSeo5);
  }

  var isContactGeneral = splittedParams.includes('contactus');

  if (isContactGeneral) {
    var _html6 = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

    var _htmlWithSeo6 = _html6.toString().replace('__SEO_TITLE__', "\u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' - \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5 050-8081119").replace('__SEO_DESCRIPTION__', "\u05E9\u05E2\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E9\u05E8\u05D3 \u05E2\u05D5\u05E8\u05DB\u05D9 \u05D3\u05D9\u05DF \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3 \u05D5\u05E9\u05D5\u05EA' / \u05D4\u05E1\u05DB\u05DE\u05D9\u05DD \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05DE\u05E9\u05E8\u05D3 /\n    \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D7\u05D5\u05D6\u05D9\u05DD \u05D1\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD \u05DB\u05D4\u05DF \u05D0\u05DC\u05E2\u05D3.");

    return res.send(_htmlWithSeo6);
  }

  var html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
  var htmlWithSeo = html.toString().replace('__SEO_TITLE__', 'עורך דין חוזים - מידע מקיף וייעוץ ראשוני / רכישת הסכמים און ליין / עורך דין חוזים אלעד כהן עורך דין חוזים תל אביב ').replace('__SEO_DESCRIPTION__', 'רכישת חוזה מקיף במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית ');
  return res.send(htmlWithSeo);
});
var port = process.env.PORT || 443;
var key = fs.readFileSync(path.join("815d0f0f19b576a6.key")).toString();
;
var cert = fs.readFileSync(path.join("815d0f0f19b576a6.pem")).toString();
var options = {
  key: key,
  cert: cert,
  requestCert: false,
  rejectUnauthorized: false
};
app.listen(8080);