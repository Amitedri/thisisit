const express = require('express');
const path = require('path');
const fs = require('fs');
const app = new express();
const services = require('./backup/Services');
const previewContracts = require('./backup/ContractExport');


app.use('/assets', express.static(path.join(__dirname, 'build/assets')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

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
