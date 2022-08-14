const express = require('express');
const path = require('path');
const fs = require('fs');
const app = new express();
const services = require('./backup/Services');
const previewContracts = require('./backup/ContractExport');
const axios = require("axios")
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'build/assets')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.post("/payment", async (req, res) => {
  console.log(req.body)
  const { name, phone, email, paymentsNum } = req.body.clientData;
  const { products } = req.body;
  // let purcahseArr = 0;
  products.forEach((el)=>{
  })
  let pageCode = "f129ea785b71";
  let userId = "aee113fccf3ed35b";
  let url = `https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=f129ea785b71&userId=aee113fccf3ed35b&apiKey=&sum=10.99&cFields1=12345678&successUrl
  =http://5.100.252.128:3854/pp-incoming&cancelUrl=http://5.100.252.128:3854/pp-incoming&description=${"test payment"}
  &paymentNum=${paymentsNum}&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=${name} &pageField[phone]=${phone}&pageField[email]=${email}`;
      url = encodeURI(url)
  let tokenReq = await axios.get(url);
  res.status(200).send(tokenReq.data.data.url);

});


app.get('*', (req, res) => {
  const splittedParams = Object.values(req.params)[0].split('/');
  let isContract = splittedParams.includes('contract');
  if (isContract) {
    let id = splittedParams[2];
    let contract = previewContracts.filter((el) => el.id == id)[0];
    console.log('contract', splittedParams[2]);
    console.log(contract);
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html.toString().replace('__SEO_TITLE__', contract.seoHeader).replace('__SEO_DESCRIPTION__', contract.seoDescription);
    return res.send(htmlWithSeo);
  }
  let isService = splittedParams.includes('service');
  if (isService) {
    let id = splittedParams[2];
    let service = services.filter((el) => el.id == id)[0];
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html.toString().replace('__SEO_TITLE__', service.seoHeader).replace('__SEO_DESCRIPTION__', service.seoDescription);
    return res.send(htmlWithSeo);
  }

  let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
  let htmlWithSeo = html.toString().replace('__SEO_TITLE__', "ELAD COHEN&CO").replace('__SEO_DESCRIPTION__', "עורך דין אלעד כהן ושות'");
  return res.send(htmlWithSeo);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`listened on ${port}`);
});
