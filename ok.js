var mammoth = require("mammoth");
var fs = require("fs");

mammoth.convertToHtml({path: "a.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        console.log(html)
        var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();