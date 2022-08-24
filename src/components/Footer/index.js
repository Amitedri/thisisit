import './Footer.css';
import previewContracts from '../../Data/ContractExport';
import servicesList from '../../Data/Services';
const Footer = () => {
  return (
    <div className="col-12 footerHeight rounded d-flex flex-column justify-content-center align-items-center align-items-center mb-2 mt-5 blue ">
      <h1 className=" w3 text-white m-3 lightBlueText text-center f32">COHEN ELAD & CO DIGITAL LAW OFFICE</h1>
      <div className="col-12 footerHeight rounded d-flex flex-row justify-content-center align-items-center">
        <div className="col-12 rounded d-flex flex-row flex-wrap justify-content-center align-content-center ">
          <div className="m-2 d-flex flex-wrap col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-8 col-8 align-items-center flex-column justify-content-start align-content-center align-items-center mt-xxl-1 mt-xl-1 mt-lg-0 mt-md-0 mt-sm-0 mt-0">
            <h1 className="w3 text-center m-3 lightBlueText">ניווט</h1>

            <a style={{ textDecoration: 'none' }} href="/" className=" col-12 mt-1 text-center  footerBtn m-2 border-white  text-white">
              עורך דין חוזים
            </a>
            <a style={{ textDecoration: 'none' }} href="/contracts" className=" col-12 col-10 mt-1 text-center  footerBtn m-2 border-white  text-white">
              הסכמים לדוגמא
            </a>
            <a style={{ textDecoration: 'none' }} href="/services" className=" col-12 col-10 mt-1 text-center  footerBtn m-2 border-white  text-white">
              שירותי המשרד
            </a>
            <a style={{ textDecoration: 'none' }} href="/legal" className=" col-12 col-10 mt-1 text-center  footerBtn m-2 border-white  text-white">
              מידע משפטי
            </a>
            <a style={{ textDecoration: 'none' }} href="/contactus" className=" col-12 mt-1 text-center  footerBtn m-2 border-white  text-white">
              צור קשר
            </a>
            <a style={{ textDecoration: 'none' }} href="/community" className=" col-12 mt-1 text-center  footerBtn m-2 border-white  text-white">
              למען הקהילה
            </a>
            <h4 className=" w3 text-center m-3 lightBlueText">צור קשר</h4>
            <div className="col-auto d-flex flex-row  p-3">
              <div className="contactItem d-flex flex-row align-items-center">
                <a href="tel:0508081119">
                  {' '}
                  <img src="../assets/icons/phone.svg" height="50" width="50" className="p-2 pointer" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=972508081119" target="_blank">
                  {' '}
                  <img src="../assets/icons/whatsapp.svg" height="50" width="50" className="p-2 pointer" />
                </a>
                <a href="mailto:office@ceco.co.il">
                  {' '}
                  <img src="../assets/icons/maildotru.svg" height="50" width="50" className="p-2 pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="fotterside m-2 d-flex flex-wrap border-xxl-end  border-xl-end  border-lg-end  border-md-end  border-sm-end border-end col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5 align-items-center flex-column justify-content-start align-content-center align-items-center mt-xxl-1 mt-xl-1 mt-lg-0 mt-md-0 mt-sm-0 mt-0">
            <h1 className=" w3 text-center m-3 lightBlueText">הסכמים לדוגמא</h1>

            {previewContracts.map((el) => {
              return (
                <a style={{ textDecoration: 'none' }} href={el.href} className=" col-12 mt-1 text-center  footerBtn m-2 border-white  text-white">
                  {el.h1}
                </a>
              );
            })}
          </div>
          <div className="m-2 d-flex border-end  col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5 align-items-center flex-column justify-content-start align-content-center align-items-center mt-xxl-1 mt-xl-1 mt-lg-0 mt-md-0 mt-sm-0 mt-0">
            <h1 className=" w3 text-center m-3 lightBlueText">שירותי המשרד</h1>
            {servicesList.map((el) => {
              return (
                <a style={{ textDecoration: 'none' }} href={el.href} className=" col-12 mt-1 text-center  footerBtn m-2 border-white  text-white">
                  {el.h1}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-6 links d-flex flex-column m-3">
        <span className="f12 text-center text-white">
          כל המידע המופיע בדף זה אינו מהווה ייעוץ משפטי או תחליף לו לרבות רכישת הסכם מקיף. כל התוכן ו/או המידע הינם באחריות הרוכש ו/או המשתמש בלבד. לקבלת ייעוץ
          משפטי צרו קשר כעת או הזמינו בקלות באתר ייעוץ משפטי.
        </span>
        <div className="col-12 links d-flex flex-row flex-wrap justify-content-evenly mt-3 ">
          <a herf="#" className="text-white">
             תנאי שימוש
          </a>
          <a herf="#" className="text-white">
           הצהרת נגישות
          </a>
          <a herf="#" className="text-white">
            הצהרת פרטיות
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
