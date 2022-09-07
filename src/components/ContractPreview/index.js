import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
import $ from 'jquery';
import './ContractPreview.css';
const ContractPreview = ({ title, whoSign, firstSigner, seocondSigner, contractBody, contractPreview, signInDate, isAgreedConsent }) => {
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
    let flexCheckDefault = document.getElementById('flexCheckDefault');

    if (!isAgreedConsent) {
      window.$('#termsModal').modal('toggle');
      flexCheckDefault.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      flexCheckDefault.parentElement.classList.add('text-danger');
      window.$('#contractLoader').collapse('hide');
      const up = document.querySelector('.moreProtectionBtn');
      up.scrollIntoView();

      return;
    }
    flexCheckDefault.parentElement.classList.remove('text-danger');

    // flexCheckDefault.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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
        {title === 'יפוי כח מתמשך' ? '' : ' ' + 'בסיסי'}
      </h1>
      <h2 className="f32 text-muted p-0"></h2>
      <div className="col-xxl-12 col-xl-12 col-lg-11 col-md-11 col-sm-11 col-11 d-flex flex-column align-items-start">
        <div className="col-xxl-10 col-xl-10 col-col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column m-auto align-items-center text-end contractBody">
          {signInDate}
          {contractPreview}
          <a className="btn yellow  letter2 w3 mb-2 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6" id="contBtn" onClick={closeContract}>
            {isExpanded ? 'סגור' : 'פתח עוד'}
          </a>
          <div class="collapse col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " id="contractLoader">
            <div class="card card-body cream border-0  p-0 text-center contractBody">{contractBody}</div>
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
              <a
                className="btn yellow  letter2 w3 mb-2 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"
                id="dbtnus"
                href="#contractLoader"
                onClick={closeContract}
              >
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
