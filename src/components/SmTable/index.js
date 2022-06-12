const SmPriceTable = ({ iconType }) => {
  return (
    <div className="col-12 d-flex flex-column">
      <div className="col-12 d-flex flex-row flex-wrap" style={{ minHeight: '40vh' }}>
        <div className="col d-flex flex-column  justify-content-center align-items-center border-start lightBlue text-white">
          <h3 className="h-25 blueText ">חבילות</h3>
          <span className="fs-6 border-bottom col-12 border-top border-white">מס' עמודים</span>
          <span className="fs-6 border-bottom col-12">קובץ WORD</span>
          <span className="fs-6 border-bottom col-12">התאמה אישית</span>
          <span className="fs-6 border-bottom col-12">מס' תיקונים</span>
          <span className="fs-6 border-bottom col-12">זמן הכנה</span>
          <span className="fs-6 border-bottom col-12">רמת הגנה</span>
          <span className="fs-6 border-bottom col-12">אחריות משפטית</span>
          <span className="fs-6 border-bottom col-12">מחיר</span>
          <div className="btn col-10 m-2" style={{ opacity: '0', cursor: 'auto' }}>
            הצג
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center border-start">
        <h3 className="h-25 blueText d-flex flex-column">בסיסי
          <span className="f16 w-75 align-self-center blueText">תקציר הסכם בסיסי ללא עלות.</span>
          </h3>
          <span className="fs-6 border-bottom col-12 border-top">עד 3</span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12">מיידי</span>
          <span className="fs-6 border-bottom col-12">XX</span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12 d-flex flex-column justify-content-center align-items-center">ללא עלות</span>

          <div className="btn cream border col-10 m-2 tableBtn hoverYellow">הצג</div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center border-start cream">
        <h3 className="h-25 blueText d-flex flex-column">מקיף
          <span className="f16 w-75 align-self-center blueText">רכישת הסכם מקיף בקובץ WORD במספר קליקים.</span>
          </h3>

          <span className="fs-6 border-bottom col-12 border-top">עד 7</span>
          <span className="fs-6 border-bottom col-12">
            {' '}
            <img src="../assets/icons/check.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />{' '}
          </span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12">מיידי</span>
          <span className="fs-6 border-bottom col-12">XX</span>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
          <span className="fs-6 border-bottom col-12 d-flex flex-column justify-content-center align-items-center">220 ש"ח</span>
          <div className="btn cream border col-10 m-2 align-self-center tableBtn hoverYellow">רכישה</div>
        </div>

      </div>
      {iconType == 'payment' ? (
        <div className="col-10 d-flex flex-row justify-content-between align-items-center align-self-center">
          <div className="col-auto p-1">
            <img src="../assets/icons/ssl.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1">
            <img src="../assets/icons/mc_symbol.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1">
            <img src="../assets/icons/pci.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1">
            <img src="../assets/icons/bit.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1">
            <img src="../assets/icons/isracard.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1">
            <img src="../assets/icons/visa.png" height="60" width="60" />
          </div>
        </div>
      ) : (
        <div className="col-12 d-flex flex-row">
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">שירות מקצועי ובגובה העיניים</span>
            <img src="../assets/icons/excellence-honor.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">הסכם מלא ומקיף</span>
            <img src="../assets/icons/five-stars.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">ייעוץ ראשוני ללא עלות</span>
            <img src="../assets/icons/free-time.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">עלות שווה לכל נפש</span>
            <img src="../assets/icons/like-heart-round-line.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">התאמה אישית תוך 48 שעות</span>
            <img src="../assets/icons/man-mobile-chat.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">קביעת פגישת און ליין</span>
            <img src="../assets/icons/reservation.svg" height="25" width="25" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SmPriceTable;
