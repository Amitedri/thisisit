import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
import $ from 'jquery';
import './ContractPreview.css';
const ContractPreview = ({ title, whoSign, firstSigner, seocondSigner, contractBody,contractPreview }) => {
  const headerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAgreedTerms, setIsAgreedTerms] = useState(false);
  const [isAgreedConsent, setisAgreedConsent] = useState(false);
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

  const setTrigger = (value) => {
    setIsExpanded((prev) => !prev);
  };
  useEffect(() => {
    // if (!isExpanded) {
    //   window.$('#contractLoader').collapse('hide');
    // }
    console.log(isExpanded);
  }, [isExpanded]);
  return (
    <div className="col-12 d-flex flex-column align-items-center text-center cream p-0 rounded" ref={headerRef}>
      <h1 className="f42 w3 mt-5" id="mainContractHeader">
        {title}
      </h1>
      <h2 className="f32 text-muted p-0"></h2>
      <div className="col-10 d-flex flex-column align-items-start">
        <div className="d-grid w-100 d-flex flex-column m-auto align-items-center text-end">
        {contractPreview}
          <a
            className="btn yellow w-25 letter2 w3 mb-2"
            data-bs-toggle="collapse"
            href="#contractLoader"
            role="button"
            aria-expanded="false"
            aria-controls="contractLoader"
            id="expandContract2"
            // onClick={() => setIsExpanded(false)}
          >
            {isExpanded ? 'סגור' : 'פתח עוד'}
          </a>
          <div class="collapse" id="contractLoader">
            <div class="card card-body cream border-0 text-end">{contractBody}</div>
            <a
            className="btn yellow w-25 letter2 w3 mb-2"
            data-bs-toggle="collapse"
            href="#contractLoader"
            role="button"
            aria-expanded="false"
            aria-controls="contractLoader"
            // onClick={() => setIsExpanded(false)}
          >
            {isExpanded ? 'סגור' : 'פתח עוד'}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPreview;
