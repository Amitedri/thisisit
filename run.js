const pdf2html = require('pdf2html')
const path = require("path");

pdf2html.html("C:\\Users\\root\\OneDrive\\Desktop\\ok\\sddsdssdds.pdf", (err, html) => {
    if (err) {
        console.error('Conversion error: ' + err)
    } else {
        console.log(html)
    }
})