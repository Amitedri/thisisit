const express = require('express');
const path = require('path');
const child_process = require('child_process');

const fs = require('fs');
const app = new express();
const services = require('./backup/Services');
const previewContracts = require('./backup/ContractExport');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cecotechside@gmail.com',
    pass: 'rtenznfhkzohjzju',
  },
});
const makeMessageEmailTemplate = ({ name, phone, email, message }) => {
  return `<html>
  <head>
      <style>
      body{
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
      }
          div{
            display:block !important;
            text-align:center !important;
  
          }
          
          .total{
            text-align:center !important;
          }
          .oneTwo{
            border-bottom:1px solid grey;
            margin-bottom:5px;
          }
          span{
            font-size:15px;
            margin:5px !important;
            padding:5px !important;
            display:block !important;
          }
      </style>
  </head>
  <body class="col-12 d-flex flex-column">
  <h1 class"total">הודעה חדשה </h1>
  <div class"total">שם מלא: ${name}</div>
  <div class"total">טלפון: ${phone}</div>
  <div class"total">אימייל: ${email}</div>  
      <span class"total">הודעה - ${message}</span>
  </body>
  </html>`;
};
const makeProductEmailTemplate = ({ name, phone, email, productName, pack, description, total }) => {
  return `<html>
  <head>
      <style>
      body{
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
      }
          div{
            display:block !important;
            text-align:center !important;
  
          }
          
          .total{
            text-align:center !important;
          }
          .oneTwo{
            border-bottom:1px solid grey;
            margin-bottom:5px;
          }
          span{
            font-size:15px;
            margin:5px !important;
            padding:5px !important;
            display:block !important;
          }
      </style>
  </head>
  <body class="col-12 d-flex flex-column">
  <h1 class"total">פרטי הרכישה שלך</h1>
  <div class"total">שם מלא: ${name}</div>
  <div class"total">טלפון: ${phone}</div>
  <div class"total">אימייל: ${email}</div>  
      <span class"total">
      שם המוצר: ${productName} ${pack}
      </span>
      <span class"total">
      סה"כ שולם : ${total}
      </span>
      <span class"total">
      ${description}
      </span>
  </body>
  </html>`;
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'build/assets')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.post('/message', async (req, res) => {
  if (!req.body.hasOwnProperty('message') || !req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('phone')) {
    return res.status(401).send('request denied');
  }
  const { name, email, phone, message } = req.body;
  const messageTemplate = makeMessageEmailTemplate({ email, name, phone, message });
  console.log(req.body);
  const request = await sendEmail({ data: messageTemplate, name, phone, subject: `הודעה חדשה מהאתר מ - ${name}` });
  console.log(request);
  res.status(200).send('request.body');
});
const sendEmail = async ({ name, phone, data, subject }) => {
  const result = await transporter.sendMail({
    from: 'cecotechside@gmail.com',
    // to: "Sale@hareli.co.il
    to: 'cecotechside@gmail.com',
    subject: subject,
    html: data,
    encoding: 'utf8',
  });
  console.log(result);
};
const sendEmailWithAttachment = async ({ data, subject, contractName }) => {
  const result = await transporter.sendMail({
    from: 'cecotechside@gmail.com',
    // to: "Sale@hareli.co.il
    to: 'cecotechside@gmail.com',
    subject: subject,
    html: data,
    encoding: 'utf8',
    attachments: [
      {
        filename: `${contractName}.pdf`,
        content: fs.createReadStream(path.resolve(__dirname, 'public', 'assets', 'files', `${contractName}.pdf`)),
      },
    ],
  });
  console.log(result);
};

app.post('/paymentdone', (req, res) => {
  if (!req.body.hasOwnProperty('clientData') || !req.body.hasOwnProperty('products')) {
    return res.status(401).send('request denied');
  }
  const { products, clientData } = req.body;

  products.forEach(async (el) => {
    let template = makeProductEmailTemplate({
      description: '',
      email: clientData.email,
      name: clientData.name,
      pack: 'מקיף',
      phone: clientData.phone,
      productName: el.name,
      total: `${el.price}₪`,
    });
    const email = await sendEmailWithAttachment({
      subject: 'פרטי הרכישה מאלעד כהן',
      data: template,
      contractName: el.name,
    });
    console.log(email);
  });
  //send email templates

  return res.status(200).send('received');
});

app.post('/payment', async (req, res) => {
  var total = 0;
  const { name, phone, email, paymentMethod, paymentsNum } = req.body.clientData;
  const { products } = req.body;
  products.forEach((el) => {
    let item = previewContracts.filter((elem) => elem.id == el.id);
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
  let cardUrl = `https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=f129ea785b71&userId=aee113fccf3ed35b&apiKey=&sum=${total}&cFields1=12345678&successUrl=https://www.ceco.co.il/paymentres/success&cancelUrl=https://www.ceco.co.il/paymentres/failed&description=${'test payment'}&paymentNum=${paymentsNum}&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=${name} &pageField[phone]=${phone}&pageField[email]=${email}`;
  let bitUrl = `https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess/?pageCode=e428a2740341&userId=aee113fccf3ed35b&apiKey=&sum=${total}&cFields1=12345678&successUrl=https://www.ceco.co.il/paymentres/success&cancelUrl=https://www.ceco.co.il/paymentres/failed&description=${'test payment'}
  &paymentNum=${paymentsNum}&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=${name} &pageField[phone]=${phone}&pageField[email]=${email}`;
  let url = paymentMethod === 'card' ? cardUrl : bitUrl;
  url = encodeURI(url);
  let tokenReq = await axios.get(url);
  if (total > 0) {
    return res.status(200).send({ url: tokenReq.data.data.url, products, clientData: req.body.clientData });
  }
  return res.status(200).send(`invalid req`);
});

app.post('/paymentaccept', (req, res) => {
  console.log('paymentaccept');
  console.log(req.body);
  res.send('ok');
});

app.get('*', (req, res) => {
  const splittedParams = Object.values(req.params)[0].split('/');
  let isContract = splittedParams.includes('contract');
  if (isContract) {
    let id = splittedParams[2];
    let contract = previewContracts.filter((el) => el.id == id)[0];
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
  let htmlWithSeo = html.toString().replace('__SEO_TITLE__', 'ce & co. law office').replace('__SEO_DESCRIPTION__', "עורך דין אלעד כהן ושות'");
  return res.send(htmlWithSeo);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`listened on ${port}`);
});
