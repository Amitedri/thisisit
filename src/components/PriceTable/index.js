const PriceTable = ({ iconType }) => {
  return (
    <div className="col-12 d-flex flex-column">
    <table class="table bg-white">
    <thead>
      <tr>
        <th scope="col" className="">חבילות</th>
        <th scope="col">
          <h3 className="h-25 blueText d-flex flex-column">
            בסיסי
            <span className="f16 w-50 align-self-center blueText">תקציר הסכם בסיסי ללא עלות.</span>
          </h3>
        </th>
        <th scope="col">
          <h3 className="h-25 blueText d-flex flex-column">
            מקיף
            <span className="f16 w-50 align-self-center blueText">רכישת הסכם מקיף בקובץ WORD במספר קליקים.</span>
          </h3>
        </th>
        <th scope="col">
          <h3 className="h-25 blueText d-flex flex-column">
            התאמה אישית
            <span className="f16 w-50 align-self-center blueText">הסכם מקיף + 30 ד' התאמה אישית, תוך 48 שעות.</span>
          </h3>
        </th>
        <th scope="col">
          <h3 className="h-25 blueText d-flex flex-column">
            פגישת ייעוץ
            <span className="f16 w-50 align-self-center blueText">90 ד' פגישת ייעוץ להגנה מיטבית.</span>
          </h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="col-2 lightBlue border-white" scope="row">
          מס' עמודים
        </th>
        <td>עד 3</td>
        <td>עד 7</td>
        <td>עד 3</td>
        <td>עד 3</td>

      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          קובץ WORD
        </th>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/check.svg" height="20" width="20" />
          </span>
        </td> <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/check.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/check.svg" height="23" width="23" />
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          התאמה אישית
        </th>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>  <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          מס' תיקונים
        </th>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>  <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          זמן הכנה
        </th>
        <td>מיידי</td>
        <td>מיידי</td>
        <td>מיידי</td>
        <td>מיידי</td>

      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          רמת הגנה
        </th>
        <td>XXX</td>
        <td>XXX</td>
        <td>XXX</td>
        <td>XXX</td>

      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          אחריות משפטית
        </th>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
        <td>
          <span className="fs-6 border-bottom col-12">
            <img src="../assets/icons/out.svg" height="20" width="20" />
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          מחיר
        </th>
        <td>ללא עלות</td>
        <td>220 ש"ח</td>
        <td>720 ש"ח</td>
        <td>1420 ש"ח</td>
      </tr>
      <tr>
        <th scope="row" className="col-2 lightBlue border-white">
          {" "}
        </th>
        <td className="bg-white">הצג</td>
        <td>רכישה</td>
        <td>רכישה</td>
        <td>קבע פגישה</td>
      </tr>
    </tbody>
  </table>
      {iconType == 'payment' ? (
        <div className="col-10 d-flex flex-row justify-content-between align-items-center align-self-center ">
          <div className="col-auto p-1 ">
            <img src="../assets/icons/ssl.svg" height="85" width="85" />
          </div>
          <div className="col-auto p-1 ">
            <img src="../assets/icons/mc_symbol.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1 ">
            <img src="../assets/icons/pci.svg" height="85" width="85" />
          </div>
          <div className="col-auto p-1 ">
            <img src="../assets/icons/bit.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1 ">
            <img src="../assets/icons/isracard.svg" height="60" width="60" />
          </div>
          <div className="col-auto p-1 ">
            <img src="../assets/icons/visa.png" height="60" width="60" />
          </div>
        </div>
      ) : (
        <div className="col-12 d-flex flex-row ">
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

export default PriceTable;
