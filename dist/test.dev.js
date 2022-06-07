"use strict";

var mammoth = require("mammoth");

var fs = require("fs");

fs.readdir("all", function (err, files) {
  files.forEach(function (file) {
    console.log(file);
    var splitted = file.split(".")[0];
    mammoth.convertToHtml({
      path: "all/".concat(file)
    }).then(function (result) {
      console.log(result.value);
      fs.writeFileSync("".concat(splitted, ".html"), result.value);
    }).done();
  });
});