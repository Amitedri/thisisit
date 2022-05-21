import './ContactsUs.css';

const ContactsUs = () => {
  return (
    <div className="col-12 cream d-flex flex-column flex-wrap justify-content-center align-items-center responsiveContainer p-0 mt-5 rounded standupContainer">
      {/* right */}
      {/* standup header */}
      <div className="col-12 p-0 lightBlue d-flex flex-row align-items-center justify-content-center p-0  rounded">
        <h1 className="specialHeader yellowText text-center">יצירת קשר</h1>
        <a href="#">
          <img src="./assets/icons/phone.svg" height="75" width="75" className="me-5" />
        </a>
      </div>
      {/* Content */}
      <div className="col-12 h-100 p-0 d-flex flex-row flex-wrap align-items-center rounded m-auto">
        {/* form */}
        <div className="col-6 formContainer d-flex flex-row flex-wrap align-items-center justify-content-center  standupBorder">
          <div className="col-auto d-flex flex-row formItem m-2 justify-content-between">
            <span className="align-self-start f20 w2 ">שם מלא</span>
            <input className="formInput" type="text" placeholder="הקלד כאן" />
          </div>
          <div className="col-auto d-flex flex-row formItem m-2 justify-content-between">
            <span className="align-self-start f20 w2 ">אימייל</span>
            <input className="formInput" type="text" placeholder="הקלד כאן" />
          </div>
          <div className="col-auto d-flex flex-row formItem m-2 justify-content-between">
            <span className="align-self-start f20 w2 ">טלפון</span>
            <input className="formInput" type="text" placeholder="הקלד כאן" />
          </div>
          {/* message container */}
          <div className="col-10 align-self-center d-flex flex-column">
            <span className="align-self-center f20 border-bottom mb-2">הודעה</span>
            <input type="text" className="messageInput col-auto" />
            <button style={{ letterSpacing: '1px' }} className="btn btn-lg col-6 yellow align-self-center mt-2 w3">
              צור קשר עכשיו
            </button>
          </div>
        </div>
        {/* left */}
        {/* contact container */}
        <div className="col-6 p-2 contactInfo d-flex flex-column align-items-center p-0 mt-2 text-center">
          <h1
            className="m-0 amatic f42
          letter5 fw-bold"
          >
            פרטי קשר
          </h1>
          <span className="greyText w3">
            צרו כעת קשר עם משרדנו ב-
            <img src="./assets/icons/whatsapp.svg" height="20" width="20" className="m-1" />
          </span>

          <span className="greyText w3">או שלחו הודעת טקסט למספר 052-12121212</span>
          <h2 className="greyText w6 f20  m-0 mt-1">אימייל</h2>
          <a href="#" className="pointer" style={{ all: 'unset' }}>
            <span className="greyText w3  ">office@ceco.com</span>
          </a>
          <h2 className="greyText w6 f20  m-0 mt-1">שעות פעילות המשרד</h2>
          <span>ימים א'-ה' 08:00 - 20:00</span>
          <span>ימי ו' וערבי חג 08:00-13:00</span>
          <h3 className="greyText w6 f20  m-0 mt-1">כתובת המשרד</h3>
          <span>יפו 97, ירושלים קומה 7 משרד 317</span>
          <a className="greyText w3 btn border border-dark m-2 btn-sm">
            הוראות הגעה ב-
            <img src="./assets/icons/waze.svg" height="20" width="20" className="m-1" />
          </a>
          <div>
          <iframe className='border border-1 rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5023059297287!2d35.217411384538075!3d31.784057681283183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329d7e23981c9%3A0xfd7662d2e7fae713!2z15nXpNeVIDk3LCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1653168463202!5m2!1siw!2sil"   referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactsUs;
