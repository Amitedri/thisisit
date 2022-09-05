var pdfUtil = require('pdf-to-text');
const path = require("path")
var option = {from: 0, to: 10};

pdfUtil.pdfToText(path.resolve(__dirname,"הסכם מייסדים.pdf"), option, function(err, data) {
    if (err) throw(err);
    console.log(data); //print text    
  });
   