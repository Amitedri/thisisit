const Check = ({ value }) => {
  if (!value) {
    return <img src="../assets/icons/out.svg" height="23" width="23" />;
  }
  return <img src="../assets/icons/check.svg" height="23" width="23" />;
};

const Stars = ({ amount }) => {
  let stars = [];
  for (let i = 0; i < amount; i++) {
    stars.push(<img src="../assets/icons/stargold.svg" height="15" width="15" />);
  }
  return stars;
};
const PriceTable = ({
  iconType,
  priceBasic,
  makingTimeBasic,
  numOfPagesBasic,
  numOfFixesBasic,
  priceMekif,
  makingTimeMekif,
  numOfPagesMekif,
  numOfFixesMekif,
  priceCustom,
  makingTimeCustom,
  numOfPagesCustom,
  numOfFixesCustom,
  priceMeeting,
  makingTimeMeeting,
  numOfPagesMeeting,
  numOfFixesMeeting,
}) => {
  return (
    <div className="col-12 d-flex flex-column" id="tableDisplay">
      <table class="table bg-white">

        <thead style={{ height: '50px' }} >
          <tr>
            <th scope="col" className="col" >
            <h3 className="f22 align-self-center basic blueText w-50 m-auto" style={{height:"50px"}}>חבילות</h3>

            </th>
            <th scope="col" className="col-2 basic" >
              <h3 className="f22 blueText d-flex flex-column">
                בסיסי
                <span className="f12 align-self-center basic blueText w-50" style={{height:"50px"}}>תקציר הסכם בסיסי ללא עלות.</span>
              </h3>
            </th>
            <th scope="col" className="col-2" >
              <h3 className="f22 blueText d-flex flex-column">
                מקיף
                <span className="f12 align-self-center basic blueText w-50" style={{height:"50px"}}>רכישת הסכם מקיף בקובץ WORD במספר קליקים.</span>
              </h3>
            </th>
            <th scope="col" className="col-2" >
              <h3 className="f22 blueText d-flex flex-column">
                התאמה אישית
                <span className="f12 align-self-center basic blueText w-50" style={{height:"50px"}}>הסכם מקיף + 30 ד' התאמה אישית, תוך 48 שעות.</span>
              </h3>
            </th>
            <th scope="col" className="col-2" >
              <h3 className="f22 blueText d-flex flex-column">
                פגישת ייעוץ
                <span className="f12 align-self-center basic blueText w-50" style={{height:"50px"}}>90 ד' פגישת ייעוץ להגנה מיטבית.</span>
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="col-2 lightBlue border-white" scope="row">
              מס' עמודים
            </th>
            <td className="basic">עד {numOfPagesBasic}</td>
            <td>עד {numOfPagesMekif}</td>
            <td>עד {numOfPagesCustom}</td>
            <td>עד {numOfPagesMeeting}</td>

          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              קובץ WORD
            </th>
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
              <img src="../assets/icons/check.svg" height="23" width="23" />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/check.svg" height="23" width="23" />
              </span>
            </td>{' '}
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/check.svg" height="23" width="23" />
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
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
                <Check value={true} />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>{' '}
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              מס' תיקונים
            </th>
            <td className="basic">
              <span className="fs-6 border-bottom col-12">{numOfFixesBasic}</span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>{' '}
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              זמן הכנה
            </th>
            <td className="basic">{makingTimeBasic}</td>
            <td>מיידי</td>
            <td>מיידי</td>
            <td>מיידי</td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              רמת הגנה
            </th>
            <td className="basic">
              <Stars amount={"3"} />
            </td>
            <td>
              {' '}
              <Stars amount={"3"} />
            </td>
            <td>
              {' '}
              <Stars amount={"3"} />
            </td>
            <td>
              {' '}
              <Stars amount={"3"} />
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              אחריות משפטית
            </th >
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
              <img src="../assets/icons/out.svg" height="23" width="23" />

              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td>
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
          </tr>
          <tr className=" border-white">
            <th scope="row" className="col-2 lightBlue border-white">
              מחיר
            </th>
            <td className="basic">ללא עלות</td>
            <td>220 ש"ח</td>
            <td>720 ש"ח</td>
            <td>1420 ש"ח</td>
          </tr>
          <tr className="border-top-0 border-white">
            <th scope="row" className="col-2">
             
            </th>
            <td className="w3 basic"><div className="btn p-1 border w-75 border-white tableBtn">הצג</div></td>
            <td className="w3"><div className="btn p-1 border w-75 border-white tableBtn">רכישה</div></td>
            <td className="w3"><div className="btn p-1 border w-75 border-white tableBtn">רכישה</div></td>
            <td className="w3"><div className="btn p-1 border w-75 border-white tableBtn">קבע פגישה</div></td>
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
            <img src="../assets/img/visa.png" height="60" width="60" />
          </div>
        </div>
      ) : (
        <div className="col-12 d-flex flex-row ">
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">שירות מקצועי ומהיר</span>
            <img src="../assets/icons/five-stars.svg" height="25" width="25" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center ms-1 mt-2 mb-2 border-bottom shadow-sm border border-light">
            <span className="col-8">הסכם מלא ומקיף</span>
            <img src="../assets/icons/excellence-honor.svg" height="25" width="25" />
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
