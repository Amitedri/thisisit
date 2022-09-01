import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import ContractPreview from '../../components/ContractPreview';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import { general } from '../../Data/Questions';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { scrollIntoView } from '../../Utils';
import { addProduct, setShowCart, setTermsModal } from '../../Slice';
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = ({ previewContracts, servicesList }) => {

  const disptach = useDispatch();
  const [questions, setQuestions] = useState([]);

  const { id } = useParams();
  const [category, setCategory] = useState('');
  const generalConsent = useSelector((state) => state.prods.generalConsent);

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
    tailoredBasic: false,
    levelOfProtectionBasic: '2',
    warrantyBasic: false,
  });
  const [mekifContractData, setMekifContractData] = useState({
    priceMekif: '',
    makingTimeMekif: '',
    numOfFixesMekif: '',
    numOfPagesMekif: '',
    hasMekifColumn: true,
    tailoredMekif: false,
    levelOfProtectionMekif: '2',
    warrantyMekif: false,
  });
  const [customContractData, setCustomContractData] = useState({
    priceCustom: '',
    numOfPagesCustom: '',
    makingTimeCustom: '',
    numOfFixesCustom: '',
    hasCustomColumn: true,
    tailoredCustom: false,
    levelOfProtectionCustom: '2',
    warrantyCustom: false,
  });
  const [meetingContractData, setMeetingContractData] = useState({
    priceMeeting: '',
    numOfFixesMeeting: '',
    makingTimeMeeting: '',
    numOfPagesMeeting: '',
    hasMeetingColumn: true,
    tailoredMeeting: false,
    levelOfProtectionMeeting: '2',
    warrantyMeeting: false,
  });
  const addItem = (value) => {
    if (isAgreedConsent) {
      disptach(setShowCart(true));

      disptach(addProduct(value));
    }
  };
  useEffect(()=>{
    if(generalConsent){
      let elem = document.getElementById("flexCheckDefaultOdsdsd");
      elem.checked = true;
      setisAgreedConsent(true)
    }
  },[generalConsent])
  useEffect(() => {
    //get questions

    //handle doc
    const doc = previewContracts.filter((el) => el.id == id);
    const { contractBody, firstSigner, title, secondSigner, signInDate, contractPreview, imgSrc, h1, categoryHeb } = doc[0];
    const { priceBasic, makingTimeBasic, numOfPagesBasic, numOfFixesBasic, hasBasicColumn, tailoredBasic, levelOfProtectionBasic, warrantyBasic } = doc[0];
    const { priceMekif, makingTimeMekif, numOfPagesMekif, numOfFixesMekif, hasMekifColumn, tailoredMekif, levelOfProtectionMekif, warrantyMekif } = doc[0];
    const { priceCustom, makingTimeCustom, numOfPagesCustom, numOfFixesCustom, hasCustomColumn, tailoredCustom, levelOfProtectionCustom, warrantyCustom } =
      doc[0];
    const {
      priceMeeting,
      makingTimeMeeting,
      numOfPagesMeeting,
      numOfFixesMeeting,
      hasMeetingColumn,
      tailoredMeeting,
      levelOfProtectionMeeting,
      warrantyMeeting,
    } = doc[0];

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
    setCategory(categoryHeb);
    const basic = {
      priceBasic,
      makingTimeBasic,
      numOfPagesBasic,
      numOfFixesBasic,
      hasBasicColumn,
      tailoredBasic,
      levelOfProtectionBasic,
      warrantyBasic,
    };

    const mekif = { priceMekif, makingTimeMekif, numOfPagesMekif, numOfFixesMekif, hasMekifColumn, tailoredMekif, levelOfProtectionMekif, warrantyMekif };
    const custom = {
      priceCustom,
      makingTimeCustom,
      numOfPagesCustom,
      numOfFixesCustom,
      hasCustomColumn,
      tailoredCustom,
      levelOfProtectionCustom,
      warrantyCustom,
    };
    const meeting = {
      priceMeeting,
      makingTimeMeeting,
      numOfPagesMeeting,
      numOfFixesMeeting,
      hasMeetingColumn,
      tailoredMeeting,
      levelOfProtectionMeeting,
      warrantyMeeting,
    };
    setBasicContractData(basic);
    setMekifContractData(mekif);
    setCustomContractData(custom);
    setMeetingContractData(meeting);
    var question = general.filter((el) => el.relatedContract === title);
    if (question == false) {
      question = general.filter((el) => el.category === categoryHeb);
    }
    if (question == false) {
      question = general.filter((el) => el.category === 'כללי');
    }
    console.log('question', question);
    setQuestions(() => question);
  }, []);

  const showBasicContract = (event) => {
    event.preventDefault();
    let contBtn = document.getElementById('contBtn');
    let flexCheckDefault = document.getElementById('flexCheckDefault');

    if (!isAgreedConsent) {
      window.$('#termsModal').modal('toggle');
      flexCheckDefault.parentElement.classList.add('text-danger');
      window.$('#contractLoader').collapse('hide');

      return;
    }
    contBtn.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    flexCheckDefault.parentElement.classList.remove('text-danger');
    window.$('#contractLoader').collapse('toggle');
    return;
  };
  const changeConsent = useCallback(() => setisAgreedConsent((prev) => !prev), []);
  const InnerCheck = () => {
    return <input class="form-check-input" type="checkbox" onChange={changeConsent} id="flexCheckDefaultOdsdsd" />;
  };

  const onConsent = useCallback(
    ({ isAgreedConsent, contractName, id, price, pages, fixes, makingTime }) => {
      console.log(isAgreedConsent);
      if (!isAgreedConsent) {
        window.$('#termsModal').modal('toggle');
      }
      if (isAgreedConsent) {
        addItem({
          name: contractName,
          id: id,
          pack: 'מקיף',
          numOfPages: pages,
          numOfFixes: fixes,
          makingTime: makingTime,
          price,
        });
        return;
      }
    },
    [isAgreedConsent]
  );
  const Checkbox = useCallback(() => <InnerCheck />, []);

  const BackedFaq = useCallback(() => <FAQ header={`שאלות ותשובות בנושא ${category}`} withTitle="true" questions={questions} />, [questions]);
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center p-0 overflow-hidden rounded-2">
      <div class="modal" tabindex="-1" aria-labelledby="exampleModalLabel" id="termsModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body text-center mt-3">
              <p className='text-danger'>טרם צפייה בהסכם יש לאשר את תניית הפטור, תנאי השימוש ומדיניות פרטיות באתר.</p>
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
                צפייה בהסכם בסיסי
              </div>
            </div>
            <div className="col-6 d-flex flex-column mt-2 shadow-sm">
              <div
                className="btn btn-sm w-3 yellow"
                onClick={() =>
                  onConsent({
                    isAgreedConsent,
                    contractName,
                    id,
                    price: mekifContractData.priceMekif,
                    pages: mekifContractData.numOfPagesMekif,
                    fixes: mekifContractData.numOfFixesMekif,
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
              <p className="text-muted f16 w-75 m-0" style={{ textDecoration: 'underline' }}>
                תניית פטור
              </p>
              כל המידע המופיע בדף זה אינו מהווה ייעוץ משפטי או תחליף לו לרבות רכישת הסכם מקיף. כל התוכן ו/או המידע הינם באחריות הרוכש ו/או המשתמש בלבד. לקבלת
              ייעוץ משפטי צרו קשר כעת או הזמינו בקלות באתר ייעוץ משפטי.
            </p>
            <div class="form-check f12 mt-1 terms">
              <Checkbox />
              <p>
                הריני מסכים ומאשר את תניית הפטור,{' '}
                <a
                  class="form-check-label"
                  href="javascript:void(0)"
                  onClick={() =>
                    window.open(window.location.origin + '/terms', 'תנאי שימוש', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes')
                  }
                  for="flexCheckDefault"
                >
                 <a href='#'>
                 תנאי השימוש
                 </a>
                </a>{' '}
                ו
                <a href='#'>
               מדיניות הפרטיות
                 </a>
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
        isAgreedConsent={isAgreedConsent}
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
      <BackedFaq />
      <ContactsUs key={'sdnjnnnnn'} />
    </div>
  );
};

export default ProductPage;
