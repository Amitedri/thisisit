import "./Footer.css";

const Footer = () => {
  return (
    <div className="col-12 footerHeight rounded d-flex flex-column align-items-center mb-2 mt-5 blue">
        <h1 className="fs5 w3 text-white mt-2">אלעד כהן עו"ד</h1>
    <div className="col-10 d-flex flex-row flex-wrap align-items-center mt-3">
    <a href="/contracts" className="btn footerItem col text-center w3 m-2">
        לינק להסכמים
      </a>
      <a href="/services" className="btn footerItem col text-center w3 m-2">
        לינק לשירותי המשרד
      </a>
      <a href="/legal" className="btn footerItem col text-center w3 m-2">
        לינק למידע משפטי
      </a>
      <a href="/contactus" className="btn footerItem col text-center w3 m-2">
        לינק לצור קשר
      </a>
      <a href="/community" className="btn footerItem col text-center w3 m-2">
        לינק לקהילה
      </a>
      <a href="/" className="btn footerItem col text-center w3 m-2">
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
