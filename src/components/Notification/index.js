import { useEffect, useState } from 'react';
import './Notification.css';
const Notifications = ({ state }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [currentState, setCurrentState] = useState('');

  useEffect(() => {
    setCurrentState(state);
    setTimeout(() => {
      setCurrentState(0);
    }, 1000);
  }, [state]);

  useEffect(() => {
    if (currentState == 1) {
      setColor('success');
      setText('success');
    }
    if (currentState == 2) {
      setColor('warning');
      setText('warning');
    }
    if (currentState == 3) {
      setColor('danger');
      setText('danger');
    }
    if (currentState == 0) {
      setColor('');
      setText('');
    }
  }, [currentState]);
  if (!color) {
    return null;
  }
  return (
    <div className={`col-2 bg-warning perfectMiddle text-center rounded ${color}`} style={{ zIndex: '999' }}>
      <span>{text}</span>
    </div>
  );
};

export default Notifications;
