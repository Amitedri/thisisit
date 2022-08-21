import { useEffect, useState } from 'react';
import './QuickContact.css';

const QuickContact = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let width = window.$(window).width();
    if (width <= 600) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="col-auto d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex d-flex flex-column contactColumn mt-3 pointer">
      <div className="contactItem d-flex flex-column align-items-center position-relative">
        <a href="tel:0508081119">
          <img
            src="../assets/icons/phone.svg"
            height="50"
            width="50"
            className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block"
          />
        </a>
        <a className='d-flex position-relative whtcontrainer' style={{height:"70px",width:"70px"}} href="https://api.whatsapp.com/send?phone=972508081119" target="_blank">
          <img
            src={isMobile ? '../assets/icons/wha.png' : '../assets/icons/whatsapp.svg'}
            height={isMobile ? '75' : '50'}
            width={isMobile ? '75' : '50'}
            className="p-2  mb-3 d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-block pointer position-absolute bottom-0 "
            style={{transform:"rotate(-90deg)"}}
          />
        </a>
        <a href='mailto:office@ceco.co.il'>
          <img
            src="../assets/icons/maildotru.svg"
            height="50"
            width="50"
            className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default QuickContact;
