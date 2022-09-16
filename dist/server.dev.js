"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var express = require('express');

var path = require('path');

var child_process = require('child_process');

var _require = require('heroku-ssl-redirect/dist/');

_objectDestructuringEmpty(_require); // const sslRedirect = (environments = ['production'], status = 302) => {
//   const currentEnv = process.env.NODE_ENV;
//   const isCurrentEnv = environments.includes(currentEnv);
//   return (req, res, next) => {
//     if (isCurrentEnv) {
//       req.headers['x-forwarded-proto'] !== 'https' ? res.redirect(status, 'https://' + req.hostname + req.originalUrl) : next();
//     } else next();
//   };
// };


var fs = require('fs');

var app = new express();

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
    pass: 'gytrururzbiprepf'
  }
});

var makeMessageEmailTemplate = function makeMessageEmailTemplate(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      email = _ref.email,
      message = _ref.message;
  return "<html>\n  <head>\n      <style>\n      body{\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n      }\n          div{\n            display:block !important;\n            text-align:center !important;\n  \n          }\n          \n          .total{\n            text-align:center !important;\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <h1 class\"total\">\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D7\u05D3\u05E9\u05D4 </h1>\n  <div class\"total\">\u05E9\u05DD \u05DE\u05DC\u05D0: ".concat(name, "</div>\n  <div class\"total\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class\"total\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class\"total\">\u05D4\u05D5\u05D3\u05E2\u05D4 - ").concat(message, "</span>\n  </body>\n  </html>");
};

var makeProductEmailTemplate = function makeProductEmailTemplate(_ref2) {
  var name = _ref2.name,
      phone = _ref2.phone,
      email = _ref2.email,
      productName = _ref2.productName,
      pack = _ref2.pack,
      description = _ref2.description,
      total = _ref2.total;
  return "<html>\n  <head>\n      <style>\n      body{\n        display:flex !important;\n            flexDirection:column !important;\n            justify-content:evenly !important;\n      }\n          div{\n            display:block !important;\n            text-align:center !important;\n  \n          }\n          \n          .total{\n            text-align:center !important;\n          }\n          .oneTwo{\n            border-bottom:1px solid grey;\n            margin-bottom:5px;\n          }\n          span{\n            font-size:15px;\n            margin:5px !important;\n            padding:5px !important;\n            display:block !important;\n          }\n      </style>\n  </head>\n  <body class=\"col-12 d-flex flex-column\">\n  <h1 class\"total\">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA</h1>\n  <div class\"total\">\u05E9\u05DD \u05DE\u05DC\u05D0: ".concat(name, "</div>\n  <div class\"total\">\u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(phone, "</div>\n  <div class\"total\">\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ").concat(email, "</div>  \n      <span class\"total\">\n      \u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8: ").concat(productName, " ").concat(pack, "\n      </span>\n      <span class\"total\">\n      \u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD : ").concat(total, "\n      </span>\n      <span class\"total\">\n      ").concat(description, "\n      </span>\n  </body>\n  </html>");
}; // app.use(sslRedirect());


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/assets', express["static"](path.join(__dirname, 'build/assets')));
app.use('/static', express["static"](path.join(__dirname, 'build/static')));
app.post('/message', function _callee(req, res) {
  var _req$body, name, email, phone, message, messageTemplate, request;

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
          console.log(req.body);
          _context.next = 7;
          return regeneratorRuntime.awrap(sendEmail({
            data: messageTemplate,
            name: name,
            phone: phone,
            subject: "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05DE\u05D4\u05D0\u05EA\u05E8 \u05DE - ".concat(name)
          }));

        case 7:
          request = _context.sent;
          console.log(request);
          res.status(200).send('request.body');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});

var sendEmail = function sendEmail(_ref3) {
  var name, phone, data, subject, result;
  return regeneratorRuntime.async(function sendEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          name = _ref3.name, phone = _ref3.phone, data = _ref3.data, subject = _ref3.subject;
          _context2.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: 'cecotechside@gmail.com',
            // to: "Sale@hareli.co.il
            to: 'cecotechside@gmail.com',
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

var sendEmailWithAttachment = function sendEmailWithAttachment(_ref4) {
  var data, subject, contractName, target, result;
  return regeneratorRuntime.async(function sendEmailWithAttachment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = _ref4.data, subject = _ref4.subject, contractName = _ref4.contractName, target = _ref4.target;
          _context3.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: 'cecotechside@gmail.com',
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
          result = _context3.sent;
          console.log(result);

        case 5:
        case "end":
          return _context3.stop();
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
    var template, email;
    return regeneratorRuntime.async(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            template = makeProductEmailTemplate({
              description: '',
              email: clientData.email,
              name: clientData.name,
              pack: 'מקיף',
              phone: clientData.phone,
              productName: el.name,
              total: "".concat(el.price, "\u20AA")
            });
            _context4.next = 3;
            return regeneratorRuntime.awrap(sendEmailWithAttachment({
              subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
              data: template,
              contractName: el.name,
              target: clientData.email
            }));

          case 3:
            email = _context4.sent;
            console.log(email);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  }); //send email templates

  return res.status(200).send('received');
});
app.post('/payment', function _callee3(req, res) {
  var total, _req$body$clientData, name, phone, email, paymentMethod, paymentsNum, products, cardUrl, bitUrl, url, tokenReq;

  return regeneratorRuntime.async(function _callee3$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
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
          bitUrl = "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=e428a2740341&userId=aee113fccf3ed35b&apiKey=&sum=".concat(total, "&cFields1=12345678&successUrl=https://www.ceco.co.il/paymentres/success&cancelUrl=https://www.ceco.co.il/paymentres/failed&description=", 'test payment', "\n  &paymentNum=").concat(paymentsNum, "&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=").concat(name, " &pageField[phone]=").concat(phone, "&pageField[email]=").concat(email);
          url = paymentMethod === 'card' ? cardUrl : bitUrl;
          url = encodeURI(url);
          _context5.next = 10;
          return regeneratorRuntime.awrap(axios.get(url));

        case 10:
          tokenReq = _context5.sent;

          if (!(total > 0)) {
            _context5.next = 13;
            break;
          }

          return _context5.abrupt("return", res.status(200).send({
            url: tokenReq.data.data.url,
            products: products,
            clientData: req.body.clientData
          }));

        case 13:
          return _context5.abrupt("return", res.status(200).send("invalid req"));

        case 14:
        case "end":
          return _context5.stop();
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

    var _htmlWithSeo3 = _html3.toString().replace('__SEO_TITLE__', "הסכמים לדוגמא - מידע מקיף וייעוץ ראשוני עורך דין הסכמים וחוזים / עורך דין הסכמים אלעד כהן").replace('__SEO_DESCRIPTION__', "ניסוח הסכמים - רכישת הסכם מקיף בכל תחום משפטי במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית  - שירות מקצועי ומהיר - הכנסו לאתר וצרו קשר כעת ");

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

  var html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
  var htmlWithSeo = html.toString().replace('__SEO_TITLE__', 'עורך דין חוזים - מידע מקיף וייעוץ ראשוני / רכישת הסכמים און ליין / עורך דין חוזים אלעד כהן עורך דין חוזים תל אביב ').replace('__SEO_DESCRIPTION__', 'רכישת חוזה מקיף במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית ');
  return res.send(htmlWithSeo);
});
var port = process.env.PORT || 80;
app.listen(port, function () {
  console.log("listened on ".concat(port));
});