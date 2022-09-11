"use strict";

var path = require("path");

var fs = require("fs");

var file = fs.createReadStream(path.resolve(__dirname, "public", "assets", "files", "\u05D4\u05E1\u05DB\u05DD \u05E9\u05D9\u05EA\u05D5\u05E3 \u05D1\u05DE\u05E7\u05E8\u05E7\u05E2\u05D9\u05DF.pdf"));
console.log(file);