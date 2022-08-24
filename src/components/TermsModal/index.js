import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './TermsModal.css';
import { useDispatch } from 'react-redux';
import { setTermsModalTextFunc } from '../../Utils';
import Checkbox from '../Checkbox';
import { setGeneralConsent } from '../../Slice';

const TermsModal = () => {
  const dispatch = useDispatch();
  const [localShow, setLocalShow] = useState(false);
  const [localConsent, setLocalConsent] = useState(false);
  const termsModal = useSelector((state) => state.prods.termsModal);
  const generalConsent = useSelector((state) => state.prods.generalConsent);
  const [text, setText] = useState('');

  useEffect(() => {
    if (localShow != termsModal) {
      setLocalShow(termsModal);
      if (termsModal && !generalConsent) {
        window.$('#termsBackdrop').modal('show');
      } else {
        window.$('#termsBackdrop').modal('hide');
      }
    }
  }, [termsModal]);

  useEffect(() => {
    dispatch(setGeneralConsent(localConsent));
  }, [localConsent]);
  let test = `<div>hello</div>`;
  const BackedCheckbox = useCallback(() => <Checkbox setValue={setLocalConsent} title="" value={localConsent} key="jubcrdcfguljklnlkjnml" />, [localConsent]);
  return (
    <div
      className="modal fade"
      id="termsBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel6"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title m-auto text-muted text-center" id="staticBackdropLabel5">
              COHEN ELAD & CO DIGITAL LAW OFFICE
            </h5>
          </div>
          <div className="modal-body text-center">{text}</div>
          <div className="col-12 d-flex flex-row align-self-center justify-content-center align-items-center">
            <span className="align-self-center pb-1">
              הריני מאשר
              <a className="m-1" href="#">
                תנאי שימוש
              </a>
              <a className="m-1" href="#">
                עוד תנאי
              </a>
              <a className="m-1" href="#">
                ועוד תנאי
              </a>
            </span>
            <BackedCheckbox  />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn yellow w3 text-white m-auto"
              data-bs-dismiss="modal"
              onClick={() => setTermsModalTextFunc({ dispatch, value: false })}
            >
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
