import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Notification.css';
const Notifications = ({ state }) => {
  const modalText = useSelector((state) => state.prods.modalText);

  const [text, setText] = useState('');
  const [color, setColor] = useState('blue');
  const [currentState, setCurrentState] = useState('');

  useEffect(() => {
    setText(modalText)
   window.$('#staticBackdrop').modal('show');
    console.log(modalText)

  }, [modalText]);

  if (!color) {
    return null;
  }
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title m-auto text-muted" id="staticBackdropLabel">
              ELAD COHEN & CO
            </h5>
          </div>
          <div className="modal-body">{text}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary m-auto" data-bs-dismiss="modal">
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
