import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import { general } from '../../Data/Questions';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { scrollIntoView } from '../../Utils';
import { addProduct, setShowCart} from '../../Slice';
import { useDispatch, useSelector } from 'react-redux';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
const path = require("path")
const ProductPage = ({ previewContracts }) => {
  const disptach = useDispatch();
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState('');
  const generalConsent = useSelector((state) => state.prods.generalConsent);
  const [h1, seth1] = useState('');
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
  const [showFull, setShowFull] = useState(false);

  const [docs, setDocs] = useState([]);
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

  useEffect(() => {
    if (generalConsent) {
      let elem = document.getElementById('flexCheckDefaultOdsdsd');
      elem.checked = true;
      setisAgreedConsent(true);
    }
  }, [generalConsent]);

  useEffect(() => {
    const doc = previewContracts.filter((el) => el.id == id);
    var h11 = "wait"
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
    if(h1){
      h11 = h1
    }
    try {
      isAgreedConsent && showFull
        ? setDocs(() => [{ uri: path.resolve(__dirnamem,"Data","files",`${h11}.pdf`) }])
        : setDocs(() => [{ uri: path.resolve(__dirnamem,"Data","preview",`${h11}.pdf`) }]);
    } catch (err) {}
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
    seth1(h1);
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
  }, [showFull]);

  const showBasicContract = (event) => {
    event.preventDefault();
    let flexCheckDefault = document.getElementById('flexCheckDefaultOdsdsd');
    if (!isAgreedConsent) {
      window.$('#termsModal').modal('toggle');
      flexCheckDefault.parentElement.classList.add('text-danger');
      return;
    }
    flexCheckDefault.parentElement.classList.remove('text-danger');
    console.log('doing');
    setShowFull((prev) => !prev);
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
        let contBtn = document.getElementById('contBtn');
        contBtn.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
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
              <p className="text-danger">טרם צפייה בהסכם יש לאשר את תניית הפטור, תנאי השימוש ומדיניות פרטיות באתר.</p>
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
                הריני מסכים ומאשר את
                <a className="m-1" href="#" onClick={() => window.open('./assets/files/תניית הפטור.pdf')} target="_blank">
                  תניית הפטור
                </a>
                <a
                  class="form-check-label"
                  href="javascript:void(0)"
                  onClick={() => window.open('./assets/files/תניית הפטור.pdf')}
                  target="_blank"
                  for="flexCheckDefault"
                >
                  <a className="m-1" href="#" onClick={() => window.open('./assets/files/תנאי שימוש.pdf')} target="_blank">
                    תנאי השימוש
                  </a>
                </a>{' '}
                ו
                <a className="m-1" href="#" onClick={() => window.open('./assets/files/מדיניות פרטיות.pdf')} target="_blank">
                  מדיניות הפרטיות באתר
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
      {/* <ContractPreview
        key={'asdasaasdsddasdasdsa'}
        firstSigner={firstSigner}
        seocondSigner={secondSigner}
        title={h1}
        whoSign={whoSignLine}
        contractBody={contractBody}
        contractPreview={contractPreview}
        signInDate={signInDate}
        isAgreedConsent={isAgreedConsent}
      /> */}
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        className={['backgroundMain', 'col-12']}
        config={{ pdfZoom: { defaultZoom: 0.7 }, header: { disableFileName: true, disableHeader: true } }}
        theme={{ disableThemeScrollbar: true }}
      />
      <div className="col-6 d-flex flex-column m-2 shadow-sm" onClick={showBasicContract}>
        <div className="btn btn-sm w-3 moreProtectionBtn  hoverGreener blink">{showFull ? 'סגור' : 'הצג את ההסכם המלא'}</div>
      </div>

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
