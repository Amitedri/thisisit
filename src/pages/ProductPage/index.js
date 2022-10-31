import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import { general } from '../../Data/Questions';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { scrollIntoView } from '../../Utils';
import { addProduct, setShowCart, setTermsModal } from '../../Slice';
import { useDispatch, useSelector } from 'react-redux';

const fireAsync = async ({ name, path }) => {
  let elem = encodeURI(`https://ceco.co.il/assets/${path}/${name}.pdf`);
  return elem;
};
const AddDetails = ({ setName, setEmail, setSubmitDownload }) => {
  return (
    <div className="col-10 m-1 d-flex flex-column align-items-center justify-content-center shadow-sm">
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="שם פרטי ושם משפחה" className="form-control m-1" />
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='דוא"ל' className="form-control m-1" />
      <div className="col-6 text-center border shadow-sm yellow text-white f22 pointer hoverGreener" onClick={() => setSubmitDownload((prev) => !prev)}>
        להורדת ההסכם
      </div>
      <span className="text-danger d-none" id="isFormOk">
        יש למלא את כל השדות.
      </span>
    </div>
  );
};
const ProductPage = ({ previewContracts }) => {
  const disptach = useDispatch();
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState('');
  const generalConsent = useSelector((state) => state.prods.generalConsent);
  const [h1, seth1] = useState('');
  const [title, setTitle] = useState('');
  const [imgSrc, setImgSrc] = useState('../assets/img/service.png');
  const [docWhole, setDocWhole] = useState({});
  const [contractName, setContractName] = useState('');
  const [isAgreedConsent, setisAgreedConsent] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [email, setemail] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitDownload, setSubmitDownload] = useState(false);
  const [showDownloadBox, setShowDownloadBox] = useState(false);

  const [docs, setDocs] = useState('');
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
    const isFormOk = document.getElementById('isFormOk');
    if (submitDownload) {
      const emailOk = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (fullName.length > 2 && emailOk && isAgreedConsent) {
        setShowDownloadBox(true);
        setSubmitDownload(false);
        isFormOk.classList.remove('d-none');
        return;
      }
      if (!(fullName.length > 2)) {
        isFormOk.textContent = 'יש להזין שם תקין.';
        setSubmitDownload(false);
        isFormOk.classList.remove('d-none');

        return;
      }
      if (!emailOk) {
        isFormOk.textContent = 'יש להזין אימייל תקין.';
        setSubmitDownload(false);
        isFormOk.classList.remove('d-none');

        return;
      }
      if (!isAgreedConsent) {
        window.$('#termsModal').modal('toggle');
        return;
      }
    }
    console.log(fullName, email);
  }, [submitDownload, isAgreedConsent]);
  useEffect(() => {
    let width = document.body.clientWidth;
    // if (width <= 650) {
    //   setZoom(1.2);
    //   document.querySelector('.contractLayer').classList.add('specialk');
    // }
    const doc = previewContracts.filter((el) => el.id == id);

    const { imgSrc, h1, categoryHeb, title } = doc[0];
    const { priceBasic, makingTimeBasic, numOfPagesBasic, numOfFixesBasic, hasBasicColumn, tailoredBasic, levelOfProtectionBasic, warrantyBasic } = doc[0];
    const { priceMekif, makingTimeMekif, numOfPagesMekif, numOfFixesMekif, hasMekifColumn, tailoredMekif, levelOfProtectionMekif, warrantyMekif } = doc[0];
    const { priceCustom, makingTimeCustom, numOfPagesCustom, numOfFixesCustom, hasCustomColumn, tailoredCustom, levelOfProtectionCustom, warrantyCustom } =
      doc[0];
    fireAsync({ name: h1, path: 'previews' }).then((file) => {
      setDocs(file);
    });
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

    setTitle(title);
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

    if (showFull) {
      fireAsync({ name: h1, path: 'previews' }).then((file) => {
        setDocs(file);
      });
      return;
    }
    let flexCheckDefault = document.getElementById('flexCheckDefaultOdsdsd');
    if (!isAgreedConsent) {
      window.$('#termsModal').modal('toggle');
      flexCheckDefault.parentElement.classList.add('text-danger');
      flexCheckDefault.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

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
  useEffect(() => {
    if (isAgreedConsent) {
      fireAsync({ name: h1, path: 'locals' }).then((file) => {
        setDocs(file);
      });
    }
    if (!isAgreedConsent && h1) {
      fireAsync({ name: h1, path: 'previews' }).then((file) => {
        setDocs(file);
      });
    }
  }, [showFull, isAgreedConsent]);

  const BakcedObj = useCallback(() => <object className="w-100" height="900" data={`https://docs.google.com/gview?embedded=true&url=${docs}`} />, [docs]);
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
            {showDownloadBox ? (
              <div className="col-auto d-flex flex-column">
                <span className='fw-bold'> ההסכם נשלח אליכם למייל</span>
                <a download={true} className="col text-center border shadow-sm yellow text-white f22 pointer hoverGreener rounded" href={`./assets/files/${title}.pdf`}>
                  להורדת ההסכם
                </a>
              </div>
            ) : (
              <AddDetails setEmail={setemail} setName={setFullName} setSubmitDownload={setSubmitDownload} />
            )}

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
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10 d-flex flex-column align-items-center position-relative">
              <div className="col-12 m-1 d-flex flex-column shadow-sm pointer ">
                <div
                  className="yellow hoverGreener"
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
              <div className="col-12 m-1 d-flex flex-column shadow-sm pointer" onClick={() => scrollIntoView('tableDisplay')}>
                <div className="moreProtectionBtn  hoverGreener blink"> אפשרויות הגנה נוספות</div>
              </div>
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

      <BakcedObj />


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
