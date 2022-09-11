const path = require("path");
const fs = require("fs");

const file = fs.createReadStream(path.resolve(__dirname,"public","assets","files",`הסכם שיתוף במקרקעין.pdf`))
console.log(file)