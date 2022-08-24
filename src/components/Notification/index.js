import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Notification.css';
import { setModalTextFunc } from '../../Utils';
import { useDispatch } from 'react-redux';

const Notifications = () => {
  const dispatch = useDispatch();

  const modalText = useSelector((state) => state.prods.modalText);


  const [text, setText] = useState('');
  const [color, setColor] = useState('blue');
  const [currentState, setCurrentState] = useState('');

  useEffect(() => {
    console.log('modalText', modalText);

    let elem = document.querySelector('#messageBackdrop');
    if (elem) {
      if (modalText) {
        setText(() => modalText);

        window.$('#messageBackdrop').modal('show');
      }
      console.log(modalText);
    }
    setTimeout(() => {
      setModalTextFunc({ value: '', dispatch: dispatch });
      // window.$('#messageBackdrop').modal('hide');
    }, 1500);
  }, [modalText]);

  return (
    <div
      className="modal fade"
      id="messageBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel5"
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
          <div className="modal-footer">
            <button type="button" className="btn yellow w3 text-white m-auto" data-bs-dismiss="modal">
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
