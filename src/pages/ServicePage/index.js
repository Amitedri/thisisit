import "./ServicePage.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import { allProdcts, allServices } from "../../sampleData";
import FAQ from "../../components/FAQ";
import { useState } from "react";
import FullList from "../../components/FullList";

const ServicePage = () => {
  const [text, setText] = useState("");
  const [header, setHeader] = useState("");
  // const [text,setText] = useState("");

  const imgSrc = "./assets/img/service.png";

  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* large image with button */}
      <div className="col-12 p-0 position-relative serviceImageContainer">
        <img src={imgSrc} className="w-100 h-100 rounded" />
        <div className="w-100 d-flex flex-column position-absolute contentCenter z-100 h-50 m-auto">
          <h1 className="f42 align-self-center text-white">לייוי לרכישת דירה</h1>
          <div className="d-grid w-25 align-self-center">
            <button className="btn yellow f36 w3 p-2" type="button">
           קבע פגישת ייעוץ כעת אונליין
            </button>
          </div>
        </div>
      </div>
      {/* Text Area */}
      <div className="col-12 d-flex flex-row flex-wrap p-5 w-75 text-center justify-content-center">
        <h1 className="f32">כותרת</h1>
        <p className="f16">
          גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
          וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר
          מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר
          סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
          ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר סוברט
          לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
          זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </p>
        {/* <h2 className="f32 text-muted">כותרת</h2>

        <p className="f16">
          גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
          וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר
          מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר
          סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
          ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.גולר מונפרר סוברט
          לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
          זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </p> */}
      </div>
      <ContactsUs key={"sdnjnnnnn"} />
      <FullList componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh" Children={ProductSlider}/>
      <FullList componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdasahhhh" Children={ProductSlider}/>
      <FullList componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdddadhhhh" Children={ProductSlider}/>
    </div>
  );
};

export default ServicePage;
