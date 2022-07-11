import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import ProductSlider from '../../components/ProductSlider';
import ContractPreview from '../../components/ContractPreview';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import servicesList from '../../Data/Services';
import { general } from '../../Data/Questions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import previewContracts from '../../Data/ContractExport';

const ProductPage = () => {
  const generalServices = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const { id } = useParams();
  const [disclaimer, setDisclaimer] = useState('');
  const [title, setTitle] = useState('');
  const [disclaimertitle, setDisclaimerTitle] = useState('');
  const [contractBody, setContractBody] = useState('');
  const [contractPreview, setContractPreview] = useState('');
  const [imgSrc, setImgSrc] = useState('../assets/img/service.png');

  const [signTitle, setSignTitle] = useState('');
  const [whoSignLine, setWhoSignLine] = useState('');
  const [firstSigner, setFirstSigner] = useState('');
  const [secondSigner, setSecondSigner] = useState('');
  const [signInDate, setSignInDate] = useState('');
  const [isAgreedConsent, setisAgreedConsent] = useState(false);

  useEffect(() => {
    const doc = previewContracts.filter((el) => el.id == id);
    const { contractBody, disclaimer, firstSigner, title, price, secondSigner, signInDate, contractPreview, imgSrc } = doc[0];
    setDisclaimer(disclaimer);
    setTitle(title);
    setContractBody(contractBody);
    setDisclaimerTitle(title);
    setSignTitle(title);
    setWhoSignLine(title);
    setFirstSigner(firstSigner);
    setSecondSigner(secondSigner);
    setContractPreview(contractPreview);
    setSignInDate(signInDate);
    setImgSrc(imgSrc);
  }, []);
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center p-0 overflow-hidden rounded-2">
      {/* large image with button */}
      <div className="col-12 p-0 d-flex flex-row" >
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column text-center bg-white border-bottom">
          <div className="col d-flex flex-column align-items-center position-relative">
            <h1 className="f32 w5">{title}</h1>
            <h2 className="f18 text-muted">אל תסתפקו בפחות, רכשו הסכם מקיף להגנה טובה יותר על זכויותכם</h2>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10 align-self-center d-flex flex-row align-items-center mb-1">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center border-bottom shadow-sm border border-light">
                <span style={{ height: '50px' }} className="col-8 f16">
                  שירות מקצועי ומהיר
                </span>
                <img src="../assets/icons/five-stars.svg" height="25" width="25"  />
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center border-bottom shadow-sm border border-light">
                <span style={{ height: '50px' }} className="col-8 f16">
                  הסכם מלא ומקיף
                </span>
                <img src="../assets/icons/excellence-honor.svg" height="25" width="25" />
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center border-bottom shadow-sm border border-light">
                <span style={{ height: '50px' }} className="col-8 f16">
                  ייעוץ ראשוני ללא עלות
                </span>
                <img src="../assets/icons/free-time.svg" height="25" width="25" />
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center border-bottom shadow-sm border border-light">
                <span style={{ height: '50px' }} className="col-8 f16">
                  עלות שווה לכל נפש
                </span>
                <img src="../assets/icons/like-heart-round-line.svg" height="25" width="25" />
              </div>
            </div>
            <div className="col-6 d-flex flex-column mt-1 shadow-sm">
              <div className="btn btn-sm w-3 border-info">רכוש הסכם מקיף 290 ש"ח</div>
            </div>
            <div className="col-6 d-flex flex-column m-1 shadow-sm">
              <div className="btn btn-sm w-3 border-info">הצג אפשרויות הגנה נוספות</div>
            </div>
            <p className="text-muted f12 w-50 m-0">
              כל המידע המופיע בדף זה אינו מהווה ייעוץ משפטי או תחליף לו לרבות רכישת הסכם מקיף. כל התוכן ו/או המידע הינם באחריות הרוכש ו/או המשתמש בלבד. לקבלת
              ייעוץ משפטי צרו קשר כעת או הזמינו בקלות באתר ייעוץ משפטי.
            </p>
            <div class="form-check f14">
              <input class="form-check-input" type="checkbox" value="" onChange={() => setisAgreedConsent((prev) => !prev)} id="flexCheckDefault" />
              <a class="form-check-label" href="javascript:void(0)" for="flexCheckDefault">
                תנאי שימוש
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-block col-md-12 d-sm-none col-12 p-0 rounded" style={{ maxHeight: '380px' }}>
          <img src={imgSrc} className="w-100 h-100 productTopImg"  />
        </div>
      </div>
      <ContractPreview
        key={'asdasaasdsddasdasdsa'}
        firstSigner={firstSigner}
        seocondSigner={secondSigner}
        title={title}
        whoSign={whoSignLine}
        contractBody={contractBody}
        contractPreview={contractPreview}
        signInDate={signInDate}
        isAgreedConsent={isAgreedConsent}
      />
      <StandUp key={'asdasadasdasdsfffa'} />
      <FAQ header={'שאלות ותשובות בנושא משפחה'} withTitle="true" questions={general} />
      <ContactsUs key={'sdnjnnnnn'} />
    </div>
  );
};

export default ProductPage;
