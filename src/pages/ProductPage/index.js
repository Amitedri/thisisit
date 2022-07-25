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
import { scrollIntoView } from '../../Utils';
import { addProduct } from '../../Slice';
import { useDispatch } from 'react-redux';
const ProductPage = () => {
  const generalServices = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const disptach = useDispatch();

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [contractBody, setContractBody] = useState('');
  const [contractPreview, setContractPreview] = useState('');
  const [imgSrc, setImgSrc] = useState('../assets/img/service.png');
  const [docWhole, setDocWhole] = useState({});
  const [whoSignLine, setWhoSignLine] = useState('');
  const [firstSigner, setFirstSigner] = useState('');
  const [secondSigner, setSecondSigner] = useState('');
  const [signInDate, setSignInDate] = useState('');
  const [contractName, setContractName] = useState('');

  const [isAgreedConsent, setisAgreedConsent] = useState(false);
  const [basicContractData, setBasicContractData] = useState({
    priceBasic: '',
    makingTimeBasic: '',
    numOfPagesBasic: '',
    numOfFixesBasic: '',
    hasBasicColumn: true,
  });
  const [mekifContractData, setMekifContractData] = useState({
    priceMekif: '',
    makingTimeMekif: '',
    numOfFixesMekif: '',
    numOfPagesMekif: '',
    hasMekifColumn: true,
  });
  const [customContractData, setCustomContractData] = useState({
    priceCustom: '',
    numOfPagesCustom: '',
    makingTimeCustom: '',
    numOfFixesCustom: '',
    hasCustomColumn: true,
  });
  const [meetingContractData, setMeetingContractData] = useState({
    priceMeeting: '',
    numOfFixesMeeting: '',
    makingTimeMeeting: '',
    numOfPagesMeeting: '',
    hasMeetingColumn: true,
  });
  const addItem = (value) => {
    disptach(addProduct(value));
  };
  useEffect(() => {
    const doc = previewContracts.filter((el) => el.id == id);
    const { contractBody, firstSigner, title, secondSigner, signInDate, contractPreview, imgSrc, h1 } = doc[0];
    const { priceBasic, makingTimeBasic, numOfPagesBasic, numOfFixesBasic, hasBasicColumn } = doc[0];
    const { priceMekif, makingTimeMekif, numOfPagesMekif, numOfFixesMekif, hasMekifColumn } = doc[0];
    const { priceCustom, makingTimeCustom, numOfPagesCustom, numOfFixesCustom, hasCustomColumn } = doc[0];
    const { priceMeeting, makingTimeMeeting, numOfPagesMeeting, numOfFixesMeeting, hasMeetingColumn } = doc[0];

    console.log(doc);
    setTitle(title);
    setContractBody(contractBody);
    setWhoSignLine(title);
    setFirstSigner(firstSigner);
    setSecondSigner(secondSigner);
    setContractPreview(contractPreview);
    setSignInDate(signInDate);
    setImgSrc(imgSrc);
    setContractName(h1);
    setDocWhole(doc[0]);
    const basic = {
      priceBasic,
      makingTimeBasic,
      numOfPagesBasic,
      numOfFixesBasic,
      hasBasicColumn,
    };

    const mekif = { priceMekif, makingTimeMekif, numOfPagesMekif, numOfFixesMekif, hasMekifColumn };
    const custom = { priceCustom, makingTimeCustom, numOfPagesCustom, numOfFixesCustom, hasCustomColumn };
    const meeting = { priceMeeting, makingTimeMeeting, numOfPagesMeeting, numOfFixesMeeting, hasMeetingColumn };
    setBasicContractData(basic);
    setMekifContractData(mekif);
    setCustomContractData(custom);
    setMeetingContractData(meeting);
  }, []);



  
  const showBasicContract = (event) => {
    event.preventDefault();
    let contBtn = document.getElementById('contBtn');
    let flexCheckDefault = document.getElementById('flexCheckDefault');

    if (!isAgreedConsent) {
      window.$('#termsModal').modal('toggle');
      flexCheckDefault.parentElement.classList.add('text-danger');

      return;
    }
    contBtn.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    flexCheckDefault.parentElement.classList.remove('text-danger');

    window.$('#contractLoader').collapse('toggle');
    return;
  };

  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center p-0 overflow-hidden rounded-2">
      <div class="modal" tabindex="-1" aria-labelledby="exampleModalLabel" id="termsModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body text-center mt-3">
              <p>יש לאשר את תניית הפטור, תנאי השימוש ומדיניות פרטיות באתר לפני צפייה בהסכם.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn lightBlue text-white w3 m-auto" data-bs-dismiss="modal">
                סגור
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* large image with button */}
      <div className="col-12 p-0 d-flex flex-row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column text-center bg-white border-bottom">
          <div className="col d-flex flex-column align-items-center position-relative">
            <h1 className="f32 w5">{title}</h1>
            <h2 className="f18 text-muted col-7">אל תסתפקו בפחות, רכשו הסכם מקיף להגנה טובה יותר על זכויותכם</h2>
            <div className="col-6 d-flex flex-column mt-2 shadow-sm">
              <div className="btn btn-sm w-3 lightBlue text-white hoverYellow" onClick={showBasicContract}>
                צפייה בחוזה בסיסי
              </div>
            </div>
            <div className="col-6 d-flex flex-column mt-2 shadow-sm">
              <div
                className="btn btn-sm w-3 yellow  hoverGreener"
                onClick={() =>
                  addItem({
                    name: contractName,
                    id:id,
                    pack: 'מקיף',
                    price: mekifContractData.priceMekif,
                    numOfPages: mekifContractData.numOfPagesMekif,
                    numOfFixes: mekifContractData.numOfFixesMekif,
                    makingTime: mekifContractData.makingTimeMekif,
                  })
                }
              >
                רכוש הסכם מקיף 290 ש"ח
              </div>
            </div>
            <div className="col-6 d-flex flex-column m-2 shadow-sm" onClick={() => scrollIntoView('tableDisplay')}>
              <div className="btn btn-sm w-3 moreProtectionBtn  hoverGreener blink">הצג אפשרויות הגנה נוספות</div>
            </div>
            <p className="text-muted f12 w-75 m-0 d-flex flex-column justify-content-center align-content-center align-items-center">
              <p className="text-muted f16 w-75 m-0">תניית פטור</p>
              כל המידע המופיע בדף זה אינו מהווה ייעוץ משפטי או תחליף לו לרבות רכישת הסכם מקיף. כל התוכן ו/או המידע הינם באחריות הרוכש ו/או המשתמש בלבד. לקבלת
              ייעוץ משפטי צרו קשר כעת או הזמינו בקלות באתר ייעוץ משפטי.
            </p>
            <div class="form-check f12 mt-1">
              <input class="form-check-input" type="checkbox" value="" onChange={() => setisAgreedConsent((prev) => !prev)} id="flexCheckDefault" />
              <p>
                קראתי את תניית הפטור,{' '}
                <a
                  class="form-check-label"
                  href="javascript:void(0)"
                  onClick={() =>
                    window.open(window.location.origin + '/terms', 'תנאי שימוש', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes')
                  }
                  for="flexCheckDefault"
                >
                  תנאי השימוש
                </a>{' '}
                ומדיניות פרטיות באתר ואני מאשר/ת אותם
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xxl-6 col-xl-6 col-lg-6 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-block col-md-12 d-sm-none col-12 p-0 rounded"
          style={{ maxHeight: '380px' }}
        >
          <img src={imgSrc} className="w-100 h-100 productTopImg" />
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
      />
      <StandUp
        key={'asdasadasdasdsfffa'}
        doc={docWhole}
        isAgreedConsent={isAgreedConsent}
        basicContractData={basicContractData}
        mekifContractData={mekifContractData}
        customContractData={customContractData}
        meetingContractData={meetingContractData}
        contractName={contractName}
        id={id}
      />
      <FAQ header={'שאלות ותשובות בנושא משפחה'} withTitle="true" questions={general} />
      <ContactsUs key={'sdnjnnnnn'} />
    </div>
  );
};

export default ProductPage;
