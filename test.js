var mammoth = require('mammoth');
var fs = require('fs');
const { default: axios } = require('axios');

// fs.readdir("all", (err, files) => {
//   files.forEach(file => {
//      console.log(file)
//      let splitted = file.split(".")[0]
//    mammoth.convertToHtml({path: `all/${file}`})
// .then(function(result){
//    console.log(result.value)
//    fs.writeFileSync(`${splitted}.html`,result.value)
// })
// .done();
//   });

// });

const asyncWhat = async () => {
  // await axios.post("http://localhost:3200/messagees",JSON.stringify({walla:"ken"})).catch((err)=>console.log(err))
  console.log(
    JSON.stringify({
      clientData: {
        name: 'עמית אדרי',
        phone: '0522813907',
        email: 'amitedri778@gmail.com',
        paymentMethod: 'card',
      },
      products: [
        {
          name: 'הסכם מכר',
          id: '4',
          pack: 'מקיף',
          numOfPages: '9',
          numOfFixes: '0',
          makingTime: '0',
          price: '220',
        },
        {
          name: 'הסכם מכר',
          id: '4',
          pack: 'מקיף',
          numOfPages: '9',
          numOfFixes: '0',
          makingTime: '0',
          price: '220',
        },
      ],
    })
  );
};

asyncWhat();
