const express = require('express');
const path = require('path');
const child_process = require('child_process');
var compression = require('compression')

const fs = require('fs');
const app = express();

const services = require('./src/Data/Services');
const previewContracts = require('./src/Data/ContractExport');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cecotechside@gmail.com',
    pass: 'eyzpppoxkxbeqsmb',
  },
});
const makeMessageEmailTemplate = ({ name, phone, email, message }) => {
  return `<html dir="rtl" lang="he">
  <head>
      <style>
      body{
        display:flex !important;
        flexDirection:column !important;
        justify-content:center !important;
        align-items:center !important;
        text-align:center !important;
      }
          div{
            display:block !important;
            text-align:center !important;
  
          }
          
          .total{
            text-align:center !important;
            display:block !important;

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
const CustomePackContent = ({ name }) => {
  return `   <div class='total'>היי ${name},</div><br/>
  <div class="total">תודה על האמון והרכישה באתר.</div><br/>

<div class='total'>רכישת חבילת "התאמה אישית" עבור "הסכם מקיף" מעניקה לך פגישה בת חצי שעה עם עורך דין מהמשרד שבה העורך דין יעזור לך לנסח ולהתאים סעיפים לפי דרישתך ללא בחינה של מלוא הנסיבות והעובדות הקשורות לעריכת ההסכם ו/או לדרישות תיקון הניסוח. </div><br/>
<div class='total'>למייל זה מצורף קובץ "וורד" ובו ה"הסכם המקיף" שנרכש בהזמנה. חשוב מאוד להתאים את הנסיבות הספציפיות של כל מקרה לתוכן ההסכם באמצעות פגישת ייעוץ משפטית, משרדנו ישמח לעזור לך בכך.</div><br/>
<div class='total'>לנוחיותך, ניתן לקיים את פגישת "התאמה האישית" באמצעות שיחת טלפון, פגישת זום, או, פגישה פיזית במשרדנו.</div><br/>
<div class='total'>בכפוף לתנאי השימוש באתר, משרדנו יתאם איתך מועד לפגישה ההתאמה האישית תוך יום עסקים עוקב מיום ביצוע ההזמנה.</div><br/>
<div class='total'>ניתן ליצור קשר עם משרד עורכי דין כהן אלעד ושות' בשעות הפעילות המשרד ימים א'-ה' 20:00 - 08:00 ימי ו' וערבי חג 13:00 - 08:00.</div><br/>
<div class='total'>לשאלות בנושא ההזמנה שלך ניתן לפנות במייל: office@ceco.co.il או במספר טלפון 050-8081119. 
</div><br/>
<div class='total'>על מנת לייעל את פגישת "התאמה האישית" יש לשלוח את התיקונים בהסכם המקיף למייל המשרד בכתובת office@ceco.co.il.</div><br/>
<div class='total'></div><br/>`;
};
const MeetingPackContent = ({ name }) => {
  return `<div class='total'>היי ${name},</div><br/>
  <div class="total">תודה על האמון והרכישה באתר.</div><br/>

  <div class="total">רכישת חבילת "ייעוץ משפטי" מעניקה לך פגישה בת שעה וחצי עם עורך דין מהמשרד לצורך הכנת הסכם מיטבי המותאם לנסיבות הספציפיות שהובילו לעריכת ההסכם.   
  </div>
  <div class="total">לנוחיותך, ניתן לקיים את פגישת "התאמה האישית" באמצעות פגישת זום, או, פגישה פיזית במשרדנו.
  </div>
  <div class="total">בכפוף לתנאי השימוש באתר, משרדנו יתאם איתך מועד לפגישת הייעוץ תוך יום עסקים עוקב מיום ביצוע ההזמנה.
  </div>
  <div class="total>ניתן ליצור קשר עם משרד עורכי דין כהן אלעד ושות' בשעות הפעילות המשרד ימים א'-ה' 20:00 - 08:00 ימי ו' וערבי חג 13:00 - 08:00.
  </div>
<div class='total'>לשאלות בנושא ההזמנה שלך ניתן לפנות במייל: office@ceco.co.il או במספר טלפון 050-8081119. 
</div><br/>
<div class='total'>על מנת לייעל את פגישת "התאמה האישית" יש לשלוח את התיקונים בהסכם המקיף למייל המשרד בכתובת office@ceco.co.il.</div><br/>
<div class='total'></div><br/>`;
};
const MekifPackContent = ({ name }) => {
  return `   <div class='total'>היי ${name},</div><br/>
  <div class="total">תודה על האמון והרכישה באתר.</div><br/>
<div class='total'>למייל זה מצורף קובץ "וורד" ובו ה"הסכם המקיף" שנרכש בהזמנה. חשוב מאוד להתאים את הנסיבות הספציפיות של כל מקרה לתוכן ההסכם באמצעות פגישת ייעוץ משפטית, משרדנו ישמח לעזור לך בכך.</div><br/>

<div class='total'>ניתן ליצור קשר עם משרד עורכי דין כהן אלעד ושות' בשעות הפעילות המשרד ימים א'-ה' 20:00 - 08:00 ימי ו' וערבי חג 13:00 - 08:00.</div><br/>
<div class='total'>לשאלות בנושא ההזמנה שלך ניתן לפנות במייל: office@ceco.co.il או במספר טלפון 050-8081119. 
</div><br/>
<div class='total'>על מנת לייעל את פגישת "התאמה האישית" יש לשלוח את התיקונים בהסכם המקיף למייל המשרד בכתובת office@ceco.co.il.</div><br/>
<div class='total'></div><br/>`;
};
const makeMeetingProductEmailTemplate = ({ name, phone, email, productName, pack, description, total }) => {
    let time = new Date().toLocaleTimeString('he-IL', {timeZone:'Asia/Jerusalem'});
  let date = new Date().toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/')
  

  
  return `<html dir="rtl" lang="he">
  <head>
      <style>
      body{
                width:80% !important;
                margin:auto;
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
            direction: rtl !important;
      }
          div{
            display:block !important;  
          }
          
          .center{
            text-align:center !important;

          }
          .total{
            text-align:end !important;
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
  <div class='center'><img src="https://ceco.co.il/assets/img/emailLogo.png" height="150" width="350"/></div>
  ${MeetingPackContent({ name: name })}
  <h1 class="center">פרטי הרכישה שלך</h1>
  <div class="center">שם מלא: ${name}</div>
  <div class="center">טלפון: ${phone}</div>
  <div class="center">אימייל: ${email}</div>  
      <span class="center">
      שם המוצר: ${productName} ${pack}
      </span>
  <div class="center">מספר הזמנה: ${'בטיפול'}</div> 
      <span class="center">
    סה"כ שולם : ${total} כולל מע"מ
      </span>
      <div class="center">${date}-${time}</div>

      <span class="center">
      חשבונית בגין הרכישה תשלח במייל נפרד. ככל ולא נשלחה חשבונית יש לפנות למשרדנו ונשלח בהקדם.
      </span>
      <div class='center'><img src="https://ceco.co.il/assets/img/thanks.png" height="200" width="500"/></div>
      <div class='center'>כמפורט בתנאי השימוש באתר, רכישת "הסכם מקיף" ו/או חבילת "התאמה אישית" מכל סוג באתר אינם מהווים ייעוץ משפטי או תחליף לו ואינם כוללים בשום מקרה אחריות משפטית. רכישתם ושימושם הם באחריות הגולש בלבד. אין להסתמך על המפורט בהסכם המקיף לרבות לאחר התאמה אישית והוא אינו יכול להוות עילה לתביעה ו/או טענה ו/או דרישה כלשהי כלפי משרד עורכי דין כהן אלעד ושות'. הלכות וחוקים עשויים להשתנות מעת לעת ועל כן המפורט ב"הסכם המקיף" מכל סוג עלול להיות לא מעודכן או רלוונטי. לקבלת ייעוץ משפטי הכולל אחריות משפטית צרו קשר כעת או הזמינו בקלות חבילת "ייעוץ משפטי" באתר.</div>
      <div class='center'>אסור לשכפל ו/או להעתיק ו/או להעביר לאחר בתמורה ובין אם לאו ו/או להפיץ בין אם בתמורה ובין אם לאו ו/או לפרסם בכל דרך ו/או לצור סוג של עבודה נגזרת מ"הסכם מקיף" מכל סוג ו/או קובץ אחר שנערך על ידי משרד עורכי דין כהן אלעד ושות' ו/או שנרכש באתר. כל הזכויות שמורות למשרד עורכי דין כהן אלעד ושות'. </div>


  </body>
  </html>`;
};

const thanksForMessageEmailTemplate = ({ name, phone, email, productName, pack, description, total }) => {

  return `<html dir="rtl" lang="he">
  <head>
      <style>
      body{
        width:80% !important;
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
            direction: rtl !important;
      }
          div{
            display:block !important;  
          }
          
          .center{
            text-align:center !important;

          }
          .total{
            text-align:end !important;
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
  <div class='center'><img src="https://ceco.co.il/assets/img/emailLogo.png" height="150" width="350"/></div>
  ${MekifPackContent({ name: name })}
  <h1 class="center">פרטי הרכישה שלך</h1>
  <div class="center">שם מלא: ${name}</div>
  <div class="center">טלפון: ${phone}</div>
  <div class="center">אימייל: ${email}</div>  
      <span class="center">
      שם המוצר: ${productName} ${pack}
      </span>
  <div class="center">מספר הזמנה: ${'בטיפול'}</div> 
      <span class="center">
    סה"כ שולם : ${total} כולל מע"מ
      </span>
      <div class="center">${date}-${time}</div>

      <span class="center">
      חשבונית בגין הרכישה תשלח במייל נפרד. ככל ולא נשלחה חשבונית יש לפנות למשרדנו ונשלח בהקדם.
      </span>
            <div class='center'><img src="https://ceco.co.il/assets/img/thanks.png" height="200" width="500"/></div>

      <div class='center'>כמפורט בתנאי השימוש באתר, רכישת "הסכם מקיף" ו/או חבילת "התאמה אישית" מכל סוג באתר אינם מהווים ייעוץ משפטי או תחליף לו ואינם כוללים בשום מקרה אחריות משפטית. רכישתם ושימושם הם באחריות הגולש בלבד. אין להסתמך על המפורט בהסכם המקיף לרבות לאחר התאמה אישית והוא אינו יכול להוות עילה לתביעה ו/או טענה ו/או דרישה כלשהי כלפי משרד עורכי דין כהן אלעד ושות'. הלכות וחוקים עשויים להשתנות מעת לעת ועל כן המפורט ב"הסכם המקיף" מכל סוג עלול להיות לא מעודכן או רלוונטי. לקבלת ייעוץ משפטי הכולל אחריות משפטית צרו קשר כעת או הזמינו בקלות חבילת "ייעוץ משפטי" באתר.</div>
      <div class='center'>אסור לשכפל ו/או להעתיק ו/או להעביר לאחר בתמורה ובין אם לאו ו/או להפיץ בין אם בתמורה ובין אם לאו ו/או לפרסם בכל דרך ו/או לצור סוג של עבודה נגזרת מ"הסכם מקיף" מכל סוג ו/או קובץ אחר שנערך על ידי משרד עורכי דין כהן אלעד ושות' ו/או שנרכש באתר. כל הזכויות שמורות למשרד עורכי דין כהן אלעד ושות'. </div>
  </body>
  </html>`;
};
const makeMekifProductEmailTemplate = ({ name, phone, email, productName, pack, description, total }) => {
    let time = new Date().toLocaleTimeString('he-IL', {timeZone:'Asia/Jerusalem'});
  let date = new Date().toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/')
  

  let string = `${date}-${time}`
  return `<html dir="rtl" lang="he">
  <head>
      <style>
      body{
        width:80% !important;
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
            direction: rtl !important;
      }
          div{
            display:block !important;  
          }
          
          .center{
            text-align:center !important;

          }
          .total{
            text-align:end !important;
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
  <div class='center'><img src="https://ceco.co.il/assets/img/emailLogo.png" height="150" width="350"/></div>
  ${MekifPackContent({ name: name })}
  <h1 class="center">פרטי הרכישה שלך</h1>
  <div class="center">שם מלא: ${name}</div>
  <div class="center">טלפון: ${phone}</div>
  <div class="center">אימייל: ${email}</div>  
      <span class="center">
      שם המוצר: ${productName} ${pack}
      </span>
  <div class="center">מספר הזמנה: ${'בטיפול'}</div> 
      <span class="center">
    סה"כ שולם : ${total} כולל מע"מ
      </span>
      <div class="center">${date}-${time}</div>

      <span class="center">
      חשבונית בגין הרכישה תשלח במייל נפרד. ככל ולא נשלחה חשבונית יש לפנות למשרדנו ונשלח בהקדם.
      </span>
            <div class='center'><img src="https://ceco.co.il/assets/img/thanks.png" height="200" width="500"/></div>

      <div class='center'>כמפורט בתנאי השימוש באתר, רכישת "הסכם מקיף" ו/או חבילת "התאמה אישית" מכל סוג באתר אינם מהווים ייעוץ משפטי או תחליף לו ואינם כוללים בשום מקרה אחריות משפטית. רכישתם ושימושם הם באחריות הגולש בלבד. אין להסתמך על המפורט בהסכם המקיף לרבות לאחר התאמה אישית והוא אינו יכול להוות עילה לתביעה ו/או טענה ו/או דרישה כלשהי כלפי משרד עורכי דין כהן אלעד ושות'. הלכות וחוקים עשויים להשתנות מעת לעת ועל כן המפורט ב"הסכם המקיף" מכל סוג עלול להיות לא מעודכן או רלוונטי. לקבלת ייעוץ משפטי הכולל אחריות משפטית צרו קשר כעת או הזמינו בקלות חבילת "ייעוץ משפטי" באתר.</div>
      <div class='center'>אסור לשכפל ו/או להעתיק ו/או להעביר לאחר בתמורה ובין אם לאו ו/או להפיץ בין אם בתמורה ובין אם לאו ו/או לפרסם בכל דרך ו/או לצור סוג של עבודה נגזרת מ"הסכם מקיף" מכל סוג ו/או קובץ אחר שנערך על ידי משרד עורכי דין כהן אלעד ושות' ו/או שנרכש באתר. כל הזכויות שמורות למשרד עורכי דין כהן אלעד ושות'. </div>
  </body>
  </html>`;
};
const makeCustomProductEmailTemplate = ({ name, phone, email, productName, pack, description, total }) => {
    let time = new Date().toLocaleTimeString('he-IL', {timeZone:'Asia/Jerusalem'});
  let date = new Date().toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/')
  

  return `<html dir="rtl" lang="he">
  <head>
      <style>
      body{
width:80% !important;
 margin:auto;
        display:flex !important;
            flexDirection:column !important;
            justify-content:evenly !important;
            direction: rtl !important;
      }
          div{
            display:block !important;  
          }
          .center{
            text-align:center !important;
            direction:rtl  !important;

          }
          .total{
            
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
  <div class='total'><img src="https://ceco.co.il/assets/img/emailLogo.png" height="150" width="350"/></div>
  ${CustomePackContent({ name: name })}
  <h1 class="center">פרטי הרכישה שלך</h1>
  <div class="center">שם מלא: ${name}</div>
  <div class="center">טלפון: ${phone}</div>
  <div class="center">אימייל: ${email}</div>  
      <span class="center">
      שם המוצר: ${productName} ${pack}
      </span>
  <div class="center">מספר הזמנה: ${'בטיפול'}</div> 
      <span class="center">
    סה"כ שולם : ${total} כולל מע"מ
      </span>
      <div class="center">${date}-${time}</div>

      <span class="center">
      חשבונית בגין הרכישה תשלח במייל נפרד. ככל ולא נשלחה חשבונית יש לפנות למשרדנו ונשלח בהקדם.
      </span>
            <div class='center'><img src="https://ceco.co.il/assets/img/thanks.png" height="200" width="500"/></div>

      <div class='center'>כמפורט בתנאי השימוש באתר, רכישת "הסכם מקיף" ו/או חבילת "התאמה אישית" מכל סוג באתר אינם מהווים ייעוץ משפטי או תחליף לו ואינם כוללים בשום מקרה אחריות משפטית. רכישתם ושימושם הם באחריות הגולש בלבד. אין להסתמך על המפורט בהסכם המקיף לרבות לאחר התאמה אישית והוא אינו יכול להוות עילה לתביעה ו/או טענה ו/או דרישה כלשהי כלפי משרד עורכי דין כהן אלעד ושות'. הלכות וחוקים עשויים להשתנות מעת לעת ועל כן המפורט ב"הסכם המקיף" מכל סוג עלול להיות לא מעודכן או רלוונטי. לקבלת ייעוץ משפטי הכולל אחריות משפטית צרו קשר כעת או הזמינו בקלות חבילת "ייעוץ משפטי" באתר.</div>
      <div class='center'>אסור לשכפל ו/או להעתיק ו/או להעביר לאחר בתמורה ובין אם לאו ו/או להפיץ בין אם בתמורה ובין אם לאו ו/או לפרסם בכל דרך ו/או לצור סוג של עבודה נגזרת מ"הסכם מקיף" מכל סוג ו/או קובץ אחר שנערך על ידי משרד עורכי דין כהן אלעד ושות' ו/או שנרכש באתר. כל הזכויות שמורות למשרד עורכי דין כהן אלעד ושות'. </div>
  </body>
  </html>`;
};
app.use(compression())

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

    await sendEmail({ data: messageTemplate, name, phone, subject: `הודעה חדשה מהאתר מ - ${name}`,mail:'coelad6@gmail.com' });
  res.status(200).send('request.body');
});
const sendEmail = async ({ name, phone, data, subject,mail }) => {
  const result = await transporter.sendMail({
    from: 'office@ceco.co.il',
    // to: "Sale@hareli.co.il
    to:mail,
    subject: subject,
    html: data,
    encoding: 'utf8',
  });
  console.log(result);
};
const sendEmailWithoutAttachment = async ({ data, subject, target }) => {
  const result = await transporter.sendMail({
    // from: 'office@ceco.co.il',
    // to: "Sale@hareli.co.il
    to: target,
    subject: subject,
    html: data,
    encoding: 'utf8',
  });
  console.log(result);
};
const sendEmailWithAttachment = async ({ data, subject, contractName, target }) => {
  const result = await transporter.sendMail({
    // from: 'office@ceco.co.il',
    // to: "Sale@hareli.co.il
    to: target,
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
    console.log(el);
    if (el.pack == 'מקיף') {
      let template = makeMekifProductEmailTemplate({
        description: '',
        email: clientData.email,
        name: clientData.name,
        pack: el.pack,
        phone: clientData.phone,
        productName: el.name,
        total: `${el.price}₪`,
      });
      const email = await sendEmailWithAttachment({
        subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
        data: template,
        contractName: el.name,
        target: clientData.email,
      });
      console.log(email);
    }
    if (el.pack == 'התאמה אישית') {
      let template = makeCustomProductEmailTemplate({
        description: '',
        email: clientData.email,
        name: clientData.name,
        pack: el.pack,
        phone: clientData.phone,
        productName: el.name,
        total: `${el.price}₪`,
      });
      const email = await sendEmailWithoutAttachment({
        subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
        data: template,
        target: clientData.email,
      });
      console.log(email);
    }
    if (el.pack == 'פגישת ייעוץ') {
      let template = makeMeetingProductEmailTemplate({
        description: '',
        email: clientData.email,
        name: clientData.name,
        pack: el.pack,
        phone: clientData.phone,
        productName: el.name,
        total: `${el.price}₪`,
      });
      const email = await sendEmailWithoutAttachment({
        subject: 'פרטי הרכישה ממשרד עורכי דין כהן אלעד ושות',
        data: template,
        target: clientData.email,
      });
      console.log(email);
    }
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
  &paymentNum=${paymentsNum}&maxPaymentNum=&pageField=&companyCommission=&saveCardToken=&pageField[fullName]=${name}&pageField[phone]=${phone}&pageField[email]=${email}`;
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
  const isContractGeneral = splittedParams.includes('contracts');
  if (isContractGeneral) {
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html
      .toString()
      .replace('__SEO_TITLE__', 'הסכמים לדוגמא - מידע מקיף וייעוץ ראשוני עורך דין הסכמים וחוזים / עורך דין הסכמים אלעד כהן')
      .replace(
        '__SEO_DESCRIPTION__',
        'ניסוח הסכמים - רכישת הסכם מקיף בכל תחום משפטי במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית  - שירות מקצועי ומהיר - הכנסו לאתר וצרו קשר כעת '
      );
    return res.send(htmlWithSeo);
  }
  const isServicesGeneral = splittedParams.includes('services');
  if (isServicesGeneral) {
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html
      .toString()
      .replace('__SEO_TITLE__', `שירותי משרד עורך דין אלעד כהן ושות - מידע מקיף וייעוץ ראשוני / עורך דין ומגשר אלעד כהן`)
      .replace('__SEO_DESCRIPTION__', `עורך דין מסחרי - גישור - עורך דין אזרחי - ליווי עסקאות מקרקעין שירות מקצועי ומהיר - הכנסו לאתר וצרו קשר כעת`);
    return res.send(htmlWithSeo);
  }
  const islegalGeneral = splittedParams.includes('legal');
  if (islegalGeneral) {
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html
      .toString()
      .replace('__SEO_TITLE__', `מידע משפטי משרד עורך דין אלעד כהן ושות - מידע מקיף וייעוץ ראשוני / עו"ד אלעד כהן `)
      .replace(
        '__SEO_DESCRIPTION__',
        `מדריך משפטי מקיף בתחומי פעילות המשרד - מידע משפטי דיני מקרקעין - מידע משפטי דיני משפחה - מידע משפטי דיני עבודה - צור קשר משפטי דיני חברות וסטארט אפ - הכנסו לאתר וצרו קשר כעת`
      );
    return res.send(htmlWithSeo);
  }
  const isContactGeneral = splittedParams.includes('contactus');
  if (isContactGeneral) {
    let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
    let htmlWithSeo = html
      .toString()
      .replace('__SEO_TITLE__', `משרד עורכי דין כהן אלעד ושות' - צור קשר עכשיו 050-8081119`)
      .replace(
        '__SEO_DESCRIPTION__',
        `שעות פעילות וכתובת משרד עורכי דין כהן אלעד ושות' / הסכמים לדוגמא ושירותי המשרד /
    עורך דין חוזים בירושלים כהן אלעד.`
      );
    return res.send(htmlWithSeo);
  }
  let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));
  let htmlWithSeo = html
    .toString()
    .replace('__SEO_TITLE__', 'עורך דין חוזים - מידע מקיף וייעוץ ראשוני / רכישת הסכמים און ליין / עורך דין חוזים אלעד כהן עורך דין חוזים תל אביב ')
    .replace(
      '__SEO_DESCRIPTION__',
      'רכישת חוזה מקיף במהירות ובפשטות און ליין - שירות חדש - כתיבת הסכמים וחוזים בהתאמה אישית - פגישת ייעוץ אישית להגנה משפטית מיטבית '
    );
  return res.send(htmlWithSeo);
});

const port = process.env.PORT || 443;
const key = fs.readFileSync(path.join("815d0f0f19b576a6.key")).toString();;

let cert = fs.readFileSync(path.join("815d0f0f19b576a6.pem")).toString();

var options = {
  key: key,
  cert:cert,
  requestCert: false,
  rejectUnauthorized: false
};
app.listen(8080)



