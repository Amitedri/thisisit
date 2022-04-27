import "./ServicePage.css";
import ContactsUs from '../../components/ContactUs'
import ProductSlider from '../../components/ProductSlider'
import { allProdcts, allServices } from "../../sampleData";
import FAQ from "../../components/FAQ";

const ServicePage = () => {
  const imgSrc = "./assets/img/service.png";
  return (
    <div className="row d-flex flex-column align-items-center">
      {/* large image with button */}
      <div className="row p-0 position-relative serviceImageContainer h-50">
        <img src={imgSrc} className="w-100 h-100" />
        <div className="w-100 d-flex flex-column position-absolute top-50 z-100">
          <h1 className="f42 align-self-center text-white">לייוי לרכישת דירה</h1>
          <div className="d-grid w-25 align-self-center">
            <button className="btn yellow f36 w3 p-2" type="button">
              קבע פגישת ייעוץ
            </button>
          </div>
        </div>
      </div>
      {/* Text Area */}
      <div className="row p-0 h-25 w-75 mt-5 text-center">
        <h1 className="f32">כותרת</h1>
        גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
        וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר
        מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
        נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר
        סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
        ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר סוברט
        לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה
        מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </div>
      <ContactsUs key={"sdnjnnnnn"}/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/>

    </div>
  );
};

export default ServicePage;
