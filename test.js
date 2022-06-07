var mammoth = require("mammoth");
var fs = require("fs");



    fs.readdir("all", (err, files) => {
      files.forEach(file => {
         console.log(file)
         let splitted = file.split(".")[0]
       mammoth.convertToHtml({path: `all/${file}`})
    .then(function(result){
       console.log(result.value)
       fs.writeFileSync(`${splitted}.html`,result.value)
    })
    .done();
      });

    });