import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalTextFunc } from '../../Utils';
import './ContactsUs.css';

const ContactsUs = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [wazeLinkType, setWazeLinkType] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);

  const state = useSelector((state) => state.prods);

  useEffect(() => {
    let formInputItem = document.querySelectorAll('.formInputItem');
    let messageInput = document.querySelector('.messageInput');
    if ((!submit && isSubmitted) || (submit && isSubmitted)) {
      setModalTextFunc({ value: 'ניתן לשלוח הודעה אחת, לשליחת הודעה נוספת יש לרענן את הדף.', dispatch: dispatch });
      return;
    }
    if (submit && !isSubmitted) {
      const reg = new RegExp('^[0-9]+$');
      setTimeout(() => {
        setErrorText('');
      }, 1500);
      if (!name || name.length < 2) {
        setSubmit(() => false);
        setErrorText(() => 'יש להזין שם מלא');
        formInputItem[0].parentElement.classList.add('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
        return;
      } else {
        formInputItem[0].parentElement.classList.remove('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
      }

      if (
        !email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setSubmit(() => false);
        setErrorText(() => 'נא להזין אימייל תקני.');
        formInputItem[1].parentElement.classList.add('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
        return;
      } else {
        formInputItem[1].parentElement.classList.remove('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
      }

      if (!reg.test(phone) || phone.length !== 10) {
        setSubmit(() => false);
        setErrorText(() => 'יש להזין מספר טלפון ללא מקף וללא רווחים.');
        formInputItem[2].parentElement.classList.add('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
        return;
      } else {
        formInputItem[2].parentElement.classList.remove('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
      }

      if (!message || message.length <= 10) {
        setSubmit(() => false);
        setErrorText(() => 'ההודעה צריכה להכיל לפחות 10 תווים.');
        messageInput.classList.add('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
        return;
      } else {
        messageInput.classList.remove('border', 'border-danger', 'p-1', 'rounded', 'shadow-sm');
      }
      const payload = { message, name, email, phone };
      console.log(payload);

      const asyncReq = async ({ payload }) => {
        const req = await axios({
          method: 'post',
          url: '/message',
          data: payload,
        });

        console.log(req.data);
      };
      asyncReq({ payload });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setModalTextFunc({ value: 'הודעתך התקבלה ואנו ניצור עמך קשר.', dispatch: dispatch });
      setisSubmitted(() => true);
    }
  }, [submit]);

  useEffect(() => {
    let width = document.body.clientWidth;
    if (width <= 650) {
      setWazeLinkType('waze://?h=sv9hc64sytf7&n=T&utm_source=waze_website&utm_medium=web-livemap-mobile-openapp-w_place&utm_campaign=default');
      return;
    }

    setWazeLinkType(
      'https://www.waze.com/en/live-map/directions/%D7%99%D7%A4%D7%95-97-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D?place=w.23068990.230755434.325972'
    );
    return;
  }, []);

  return (
    <div className="col-12 cream d-flex flex-column flex-wrap justify-content-center align-items-center responsiveContainer mb-5 p-0 mt-5  standupContainer">
      {/* right */}
      {/* standup header */}
      <div className="col-12 p-0 lightBlue d-flex flex-row align-items-center justify-content-center p-0  ">
        <h1 className="specialHeader yellowText text-center">יצירת קשר</h1>
        <a href="tel:0508081119" className="">
          <img
            src="../assets/icons/phone.svg"
            height="75"
            width="75"
            className="me-xxl-5 me-xl-5 me-xl-5 me-lg-5 me-md-0 me-sm-0 me-0 p-xxl-0 p-xl-0 p-lg-0 p-md-2 p-sm-2 p-3"
          />
        </a>
      </div>
      {/* Content */}
      <div className="col-12 h-100 p-0 d-flex flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column flex-wrap align-items-center  m-auto">
        {/* form */}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 formContainer d-flex flex-column flex-wrap align-items-center justify-content-center  standupBorder">
          <div className="col-xxl-auto col-xl-auto col-lg-auto formItem col-md-auto col-sm-8 col-8 d-flex flex-row formItem justify-content-between mt-1">
            <span className="align-self-start f20 w2 formInputItem">שם מלא </span>
            <input className="formInput" type="text" placeholder="הקלד כאן" value={name} onInput={(e) => setName(e.target.value)} />
          </div>
          <div className="col-12 d-flex flex-row flex-wrap align-items-center align-content-center justify-content-center justify-content-center mt-2">
            <div className="col-xxl-auto col-xl-auto col-lg-auto formItem col-md-auto col-sm-8 col-8 d-flex flex-row formItem justify-content-between m-1">
              <span className="align-self-start f20 w2 formInputItem ">אימייל*</span>
              <input
                className="formInput"
                type="email"
                required
                placeholder="הקלד כאן"
                value={email}
                autoComplete="true"
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-xxl-auto col-xl-auto col-lg-auto formItem col-md-auto col-sm-8 col-8 d-flex flex-row formItem me-xxl-5 justify-content-between m-2">
              <span className="align-self-start f20 w2 formInputItem ">טלפון*</span>
              <input className="formInput" type="text" placeholder="הקלד כאן" value={phone} onInput={(e) => setPhone(e.target.value)} />
            </div>
          </div>

          {/* message container */}
          <div className="col-10 align-self-center d-flex flex-column">
            {errorText && <span className="align-self-center text-danger border-bottom text-center border-danger col">{errorText}</span>}
            <span className="align-self-center f20 border-bottom mb-2 " placeholder="ההודעה צריכה להכיל לפחות 10 תוים">
              הודעה
            </span>
            <textarea type="text" className="messageInput col-auto" value={message} maxlength="300" onInput={(e) => setMessage(e.target.value)} />
            <button className="btn btn-lg col-6 yellow align-self-center mt-2 w3 f18" onClick={(e) => setSubmit((prev) => !prev)}>
              צור קשר עכשיו
            </button>
          </div>
        </div>
        {/* left */}
        {/* contact container */}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactInfo d-flex flex-row flex-wrap justify-content-start align-items-start text-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactInfo d-flex flex-column justify-content-center align-items-center text-center">
            <div className='d-flex flex-row'>
            <a href="tel:0508081119">
              <img
                src="../assets/icons/phone.svg"
                height="50"
                width="50"
                className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block"
              />
            </a>
            <a className="d-flex" href="https://api.whatsapp.com/send?phone=972508081119" target="_blank">
              <img
                src={'../assets/icons/whatsapp.svg'}
                height={'50'}
                width={'50'}
                className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block pointer"
                style={{ transform: 'rotate(-90deg)' }}
              />
            </a>
            <a href="mailto:office@ceco.co.il">
              <img
                src="../assets/icons/maildotru.svg"
                height="50"
                width="50"
                className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block pointer"
              />
            </a>
            </div>
            <span className='f18'>office@ceco.co.il</span>
            <span className='f18'>050-8081119</span>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactInfo d-flex flex-column align-items-center text-center justify-content-start mt-1">
            <h2 className="greyText w6 f20 ">שעות פעילות המשרד</h2>
            <span>ימים א'-ה' 08:00 - 20:00</span>
            <span>ימי ו' וערבי חג 08:00-13:00</span>
            <h3 className="greyText w6 f20">כתובת המשרד</h3>
            <span>יפו 97, ירושלים קומה 7 משרד 317</span>
          </div>

          <div className="col-12 p-2 contactInfo d-flex flex-column align-items-center p-0 mt-2 text-center">
            <a className="greyText w3 btn border border-dark m-2 btn-sm" href="javascript:;" onClick={() => window.open(wazeLinkType)}>
              הוראות הגעה ב-
              <a target="_blank">
                {' '}
                <img alt="אייקון וויז" src="../assets/icons/waze.svg" height="20" width="20" className="m-1" />
              </a>
            </a>
            <iframe
              className="col-10 border border-1 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5023059297287!2d35.217411384538075!3d31.784057681283183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329d7e23981c9%3A0xfd7662d2e7fae713!2z15nXpNeVIDk3LCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1653168463202!5m2!1siw!2sil"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
