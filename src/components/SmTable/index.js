const SmPriceTable = ({ iconType }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">חבילות</th>
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
          {/* <th scope="col">Handle</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="col-2" h scope="row">
            מס' עמודים
          </th>
          <td>עד 3</td>
          <td>עד 7</td>
        </tr>
        <tr>
          <th scope="row" className="col-2">
            קובץ WORD
          </th>
          <td>
            <span className="fs-6 border-bottom col-12">
              <img src="../assets/icons/out.svg" height="20" width="20" />
            </span>
          </td>
          <td>
            {' '}
            <span className="fs-6 border-bottom col-12">
              <img src="../assets/icons/check.svg" height="23" width="23" />
            </span>
          </td>
        </tr>
        <tr>
          <th scope="row" className="col-2">
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
        </tr>
        <tr>
          <th scope="row" className="col-2">
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
        </tr>
        <tr>
          <th scope="row" className="col-2">
            זמן הכנה
          </th>
          <td>מיידי</td>
          <td>מיידי</td>
        </tr>
        <tr>
          <th scope="row" className="col-2">
            רמת הגנה
          </th>
          <td>XXX</td>
          <td>XXX</td>
        </tr>
        <tr>
          <th scope="row" className="col-2">
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
        </tr>
        <tr>
          <th scope="row" className="col-2">
            מחיר
          </th>
          <td>ללא עלות</td>
          <td>220 ש"ח</td>
        </tr>
      </tbody>
    </table>
  );
  
};

export default SmPriceTable;
