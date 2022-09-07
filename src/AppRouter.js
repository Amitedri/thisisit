import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import LegalInfo from './pages/LegalInfo';
import Contracts from './pages/Contracts';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ForCommunity from './pages/ForCommunity';
import Contact from './pages/Contact';
import ContractLawyer from './pages/contractLawyer';
import Services from './pages/Services';
import Terms from './pages/Terms';
import servicesList from './Data/Services';
import previewContracts from './Data/ContractExport';
import { useEffect, useState } from 'react';

const ResultPage = () => {
  const { res } = useParams();

  const [wazeLinkType, setWazeLinkType] = useState('');
  const [isLocalSuccess, setIsLocalSuccess] = useState(false);
  useEffect(() => {
    console.log(res);
    let splitted = res.split('=');
    splitted = splitted[1];

    if (splitted === 'success' || res === "success") {
      setIsLocalSuccess(() => true);
    }
    if (splitted === 'failed'|| res === "failed") {
      setIsLocalSuccess(() => false);
    }
    let width = document.body.clientWidth;
    if (width <= 650) {
      setWazeLinkType('waze://?h=sv9hc64sytf7&n=T&utm_source=waze_website&utm_medium=web-livemap-mobile-openapp-w_place&utm_campaign=default');
      return;
    }

    setWazeLinkType(
      'https://www.waze.com/en/live-map/directions/%D7%99%D7%A4%D7%95-97-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D?place=w.23068990.230755434.325972'
    );
  }, []);

  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <h1 className="">{isLocalSuccess ? 'התשלום התקבל בהצלחה!' : 'התשלום נכשל.'}</h1>
      <h2 className="f22 text-muted mb-5 mt-3">
        {isLocalSuccess ? 'בדקות הקרובות ישלח אליכם מייל עם הקבצים להורדה ופרטים נוספים' : 'אפשר לנסות שוב או ליצור איתנו קשר.'}
      </h2>

      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactInfo d-flex flex-column flex-wrap justify-content-center align-items-center text-center mt-3">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactInfo d-flex flex-column align-items-center text-center">
          <a className="greyText w3 f20" href="https://api.whatsapp.com/send?phone=972508081119">
            צרו כעת קשר עם משרדנו ב-
            <img src="../assets/icons/whatsapp.svg" alt="אייקון של וואסטאפ" height="20" width="20" className="m-1" />
          </a>

          <a className="greyText w3" href="tel:0508081119">
            או שלחו הודעת טקסט למספר{' '}
            <a className="text-dark" href="tel:0508081119">
              050-8081119
            </a>
          </a>
          <h2 className="greyText w6 f20  m-0 mt-1">אימייל</h2>
          <a href="mailto:office@ceco.com" className="pointer" style={{ all: 'unset' }}>
            <a className="greyText w3  " href="mailto:office@ceco.com">
              office@ceco.com
            </a>
          </a>
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
  );
};

const AppRouter = ({ transactionSuccess }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/paymentres/:res" element={<ResultPage />} />
        <Route exact path="/legal" element={<LegalInfo />} />
        <Route exact path="/contracts" element={<Contracts servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contracts/:cat" element={<Contracts servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contract/:id" element={<ProductPage servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/services" element={<Services servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/service/:id" element={<ServicePage servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/community" element={<ForCommunity servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contactus" element={<Contact servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/" element={<ContractLawyer servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
