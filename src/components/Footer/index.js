import './Footer.css';

const Footer = () => {
  return (
    <div className="col-12 footerHeight rounded d-flex flex-column justify-content-center align-items-center mb-2 mt-5 blue ">
      <h1 className="fs5 w3 text-white mt-2">אלעד כהן עו"ד</h1>
      <div className="col-12 d-flex flex-row flex-wrap justify-content-center align-items-center mt-3 ">
        <a href="/contracts" className="btn col-xxl-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק להסכמים
        </a>
        <a href="/services" className="btn col-xxl-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק לשירותי המשרד
        </a>
        <a href="/legal" className="btn col-xxl-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק למידע משפטי
        </a>
      </div>
      <div className="col-12 d-flex flex-row flex-wrap justify-content-center align-content-center align-items-center mt-xxl-1 mt-xl-1 mt-lg-0 mt-md-0 mt-sm-0 mt-0" >

        <a href="/contactus" className="btn col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק לצור קשר
        </a>
        <a href="/community" className="btn col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק לקהילה
        </a>
        <a href="/" className="btn col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 mt-1 text-center border border-white rounded text-white">
          לינק עורך דין חוזים
        </a>
      </div>
      <div className="col-auto d-flex flex-row mt-3 p-3">
        <div className="contactItem d-flex flex-row align-items-center">
          <img src="../assets/icons/phone.svg" height="50" width="50" className="p-2" />
          <img src="../assets/icons/whatsapp.svg" height="50" width="50" className="p-2" />
          <img src="../assets/icons/maildotru.svg" height="50" width="50" className="p-2" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
