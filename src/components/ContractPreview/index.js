import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
import $ from 'jquery';
import './ContractPreview.css';
const ContractPreview = ({ title, whoSign, firstSigner, seocondSigner, contractBody, contractPreview, signInDate,isAgreedConsent }) => {
  const headerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAgreedTerms, setIsAgreedTerms] = useState(false);
  // const [isAgreedConsent, setisAgreedConsent] = useState(false);
  const [closeCollapse, setcloseCollapse] = useState(false);

  const [coditionsUrl, setCoditionsUrl] = useState('');
  const consentElement = (
    <span>
      הנני מסכים לתנאי השימוש
      <a href="#" className="m-1">
        עם לינק
      </a>
    </span>
  );
  // const setIsAgreed = (value) => {
  //   setIsAgreedTerms(value);
  //   return;
  // };
  useEffect(() => {
    window.$(document).on('show.bs.collapse', function (e) {
      setIsExpanded((prev) => true);
    });
    window.$(document).on('hide.bs.collapse', function (e) {
      setIsExpanded((prev) => false);
    });
    return () => {
      window.$(document).off('show.bs.collapse', function (e) {});
      window.$(document).off('hide.bs.collapse', function (e) {});
    };
  }, []);

  const closeContract = () => {
    let flexCheckDefault = document.getElementById("flexCheckDefault");

    if (!isAgreedConsent) {
      console.log('nope');
      flexCheckDefault.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      // flexCheckDefault.parentElement.classList.add("border","border-danger","p-1","rounded")
      return;
    }
    // flexCheckDefault.parentElement.classList.remove("border","border-danger","p-1","rounded")

    window.$('#contractLoader').collapse('toggle');
  };
  useEffect(() => {
    console.log(isExpanded);
  }, [isExpanded]);
  return (
    <div className="col-12 d-flex flex-column align-items-center text-center cream p-0 rounded" ref={headerRef}>
      <h1 className="f42 w3 mt-5" id="mainContractHeader">
        {title}
      </h1>
      <h2 className="f32 text-muted p-0"></h2>
      <div className="col-xxl-10 col-xl-10 col-lg-11 col-md-11 col-sm-11 col-11 d-flex flex-column align-items-start">
        <div className="d-grid w-100 d-flex flex-column m-auto align-items-center text-end">
          {signInDate}
          {contractPreview}
          <a href="#contractLoader" className="btn yellow w-25 letter2 w3 mb-2" onClick={closeContract}>
            {isExpanded ? 'סגור' : 'פתח עוד'}
          </a>
          <div class="collapse" id="contractLoader">
            <div class="card card-body cream border-0 text-end">{contractBody}</div>
            <div className="col d-flex flex-row align-self-center justify-content-evenly text-center">
              <div className="d-flex flex-column justify-content-center m-5">
                {firstSigner}
                <span>__________________________</span>
              </div>
              <div className="d-flex flex-column justify-content-center m-5">
                {seocondSigner}
                <span>__________________________</span>
              </div>
            </div>

            <div className="d-grid d-flex justify-content-center">
              <a className="btn yellow w-25 letter2 w3 mb-2" href="#contractLoader" onClick={closeContract}>
                {isExpanded ? 'סגור' : 'פתח עוד'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPreview;
