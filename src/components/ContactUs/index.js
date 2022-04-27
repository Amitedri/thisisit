import "./ContactsUs.css";

const ContactsUs = () => {
  return (
    <div className="col-12 cream  d-flex flex-row flex-wrap responsiveContainer p-0 mt-5 rounded">
      {/* contactus header */}
      <div className="col-12 lightBlue d-flex justify-content-center p-0 headerContainer rounded">
        <h1 className="m-auto specialHeader p-0 yellowText">CONTACT US</h1>
      </div>
      {/* form */}
      <div className="col-auto formContainer d-flex flex-column pb-5">
        <div className="col-auto d-flex align-self-center flex-wrap">
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
        </div>
        {/* message container */}
        <div className="col-10 align-self-center d-flex flex-column">
          <span className="align-self-center f20 border-bottom mb-2">הודעה</span>
          <input type="text" className="messageInput col-auto" />
          <button
            style={{ maxHeight: "50px", letterSpacing: "1px" }}
            className="btn col-6 p-0 yellow align-self-center mt-2 w3"
          >
            צור קשר עכשיו
          </button>
        </div>
      </div>
      {/* contact container */}
      <div className="col p-2 contactInfo d-flex flex-column align-items-center p-0 mt-2">
        <h1
          className="m-0 amatic f42
          letter5"
        >
          פרטי קשר
        </h1>
        <h2 className="m-0 amaticamatic f24 amatic letter3 w5">קצת טקסט אפשרי</h2>
        <span className="f22 amatic w5">email@gmail.com</span>
        <span className="f22 amatic w5">052-2813907</span>
        <div className="d-flex flex-row">
          <span className="d-flex justify-content-center">
            <img src="./assets/icons/facebook.svg" height="25" width="25" className="invertColor m-2" />
          </span>
          <span className="d-flex justify-content-center">
            <img src="./assets/icons/whatsapp.svg" height="25" width="25" className="invertColor m-2" />
          </span>
          <span className="d-flex justify-content-center">
            <img src="./assets/icons/maildotru.svg" height="25" width="25" className="invertColor m-2" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
