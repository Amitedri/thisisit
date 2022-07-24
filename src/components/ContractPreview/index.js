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

  const closeContract = (event) => {
    event.preventDefault();
    let flexCheckDefault = document.getElementById("flexCheckDefault");
    let contractLoader = document.getElementById("contractLoader");

    
    if (!isAgreedConsent) {
      window.$("#termsModal").modal("toggle")
      contractLoader.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      // flexCheckDefault.parentElement.classList.add("border","border-danger","p-1","rounded")
      return;
    }
    flexCheckDefault.parentElement.classList.remove("border","border-danger","p-1","rounded")
    // contractLoader.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
// return
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
      <div className="col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-11 col-11 d-flex flex-column align-items-start">
        <div className="col-xxl-5 col-xl-5 col-col-lg-8 col-md-8 col-sm-12 col-12 d-flex flex-column m-auto align-items-center text-end">
          {signInDate}
          {contractPreview}
          <a  className="btn yellow w-25 letter2 w3 mb-2" id="contBtn" onClick={closeContract}>
            {isExpanded ? 'סגור' : 'פתח עוד'}
          </a>
          <div class="collapse col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " id="contractLoader">
            <div class="card card-body cream border-0  p-0 text-center">{contractBody}</div>
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
              <a className="btn yellow w-25 letter2 w3 mb-2" id="dbtnus" href="#contractLoader" onClick={closeContract}>
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
