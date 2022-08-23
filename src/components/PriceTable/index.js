import { useEffect } from 'react';
import { addProduct, setShowCart } from '../../Slice';
import { useDispatch } from 'react-redux';

const Check = ({ value }) => {
  if (!value) {
    return <img src="../assets/icons/out.svg" height="23" width="23" />;
  }
  return <img src="../assets/icons/check.svg" height="23" width="23" />;
};
const MakingTime = (value) => {
  if (value === '0') {
    return 'מיידי';
  }
  if (value === '1') {
    return 'עד 2 ימי עסקים';
  }
  if (value === '2') {
    return 'עד 7 ימי עסקים';
  }
};
const Stars = ({ amount }) => {
  let stars = [];
  for (let i = 0; i < amount; i++) {
    stars.push(<img src="../assets/icons/stargold.svg" height="15" width="15" />);
  }
  return <div className="col-8 m-auto d-flex flex-row flex-wrap justify-content-center align-items-center align-content-center">{stars}</div>;
};
const PriceTable = ({ iconType, basicContractData, mekifContractData, customContractData, meetingContractData, contractName, id }) => {
  const disptach = useDispatch();
  const addItem = (value) => {
    disptach(setShowCart(true))

    disptach(addProduct(value));
  };
  useEffect(() => {
    const tableBtns = document.querySelectorAll('.clickable');
    tableBtns.forEach((el) => {
      el.addEventListener('click', (e) => {
        let elem = document.getElementById('flexCheckDefault');
        if (!elem.checked) {
          window.$('#termsModal').modal('toggle');
          elem.scrollIntoView()

          return;
        }
        let id = e.target.dataset.contractid;
        let pack = e.target.dataset.pack;
        if (pack === 'מקיף') {
          addItem({
            id: id,
            name: contractName,
            pack: pack,
            price: mekifContractData.priceMekif,
            numOfPages: mekifContractData.numOfPagesMekif,
            numOfFixes: mekifContractData.numOfFixesMekif,
            makingTime: mekifContractData.makingTimeMekif,
          });
          console.log('mekifContractData', mekifContractData);
        }
        if (pack === 'התאמה אישית') {
          addItem({
            id: id,
            name: contractName,
            pack: pack,
            price: customContractData.priceCustom,
            numOfPages: customContractData.numOfPagesCustom,
            numOfFixes: customContractData.numOfFixesCustom,
            makingTime: customContractData.makingTimeCustom,
          });
          console.log('mekifContractData', mekifContractData);
        }
        if (pack === 'פגישת ייעוץ') {
          addItem({
            id: id,
            name: contractName,
            pack: pack,
            price: meetingContractData.priceMeeting,
            numOfPages: meetingContractData.numOfPagesMeeting,
            numOfFixes: meetingContractData.numOfFixesMeeting,
            makingTime: meetingContractData.makingTimeMeeting,
          });
          console.log('meetingContractData', meetingContractData);
        }
      });
    });
    console.log('mekifContractData', mekifContractData);

    return () => {
      tableBtns.forEach((el) => {
        el.removeEventListener('click', (e) => {});
      });
    };
  }, []);
  useEffect(() => {
    let allBasic = document.querySelectorAll('.basic');
    let allMekif = document.querySelectorAll('.mekif');
    let allCustom = document.querySelectorAll('.custom');
    let allMeeting = document.querySelectorAll('.meeting');

    if (!basicContractData.hasBasicColumn) {
      allBasic.forEach((el) => {
        window.$(el).hide();
      });
    }
    if (!mekifContractData.hasMekifColumn) {
      allMekif.forEach((el) => {
        window.$(el).hide();
      });
    }
    if (!customContractData.hasCustomColumn) {
      allCustom.forEach((el) => {
        window.$(el).hide();
      });
    }
    if (!meetingContractData.hasMeetingColumn) {
      allMeeting.forEach((el) => {
        window.$(el).hide();
      });
    }
  }, []);
  return (
    <div className="col-12 d-flex flex-column" id="tableDisplay">
      <table class="table bg-white">
        <thead style={{ height: '50px' }}>
          <tr>
            <th scope="col" className="col d-flex justify-content-center" style={{ borderBottom: 'none' }}>
              <h3 className="f22 align-self-center blueText w-50 m-auto packageHeader pt-1" style={{ height: '50px' }}>
                חבילות
              </h3>
            </th>
            <th scope="col" className="col-2 basic">
              <h3 className="f22 blueText d-flex flex-column">
                בסיסי
                <span className="f12 align-self-center basic blueText w-50" style={{ height: '50px' }}>
                  הסכם בסיסי ללא עלות.
                </span>
              </h3>
            </th>
            <th scope="col" className="col-2 mekif">
              <h3 className="f22 blueText d-flex flex-column">
                הסכם מקיף
                <span className="f12 align-self-center basic blueText w-50" style={{ height: '50px' }}>
                  רכישת הסכם מקיף בקובץ WORD במספר קליקים.
                </span>
              </h3>
            </th>
            <th scope="col" className="col-2 custom">
              <h3 className="f22 blueText d-flex flex-column">
                התאמה אישית
                <span className="f12 align-self-center basic blueText w-50" style={{ height: '50px' }}>
                  הסכם מקיף + 30 ד' התאמה אישית, תוך 48 שעות.
                </span>
              </h3>
            </th>
            <th scope="col" className="col-2 meeting">
              <h3 className="f22 blueText d-flex flex-column">
                פגישת ייעוץ
                <span className="f12 align-self-center basic blueText w-50" style={{ height: '50px' }}>
                  90 ד' פגישת ייעוץ להגנה מיטבית.
                </span>
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="col-2 lightBlue border-white" scope="row">
              מס' עמודים
            </th>
            <td className="basic">עד {basicContractData.numOfPagesBasic}</td>
            <td className="mekif">עד {mekifContractData.numOfPagesMekif}</td>
            <td className="custom">עד {customContractData.numOfPagesCustom}</td>
            <td className="meeting">{meetingContractData.numOfPagesMeeting == 0 ? 'ללא הגבלה' : ` עד ${meetingContractData.numOfPagesMeeting}`}</td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              קובץ WORD
            </th>
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td className="mekif">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/check.svg" height="23" width="23" />
              </span>
            </td>{' '}
            <td className="custom">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/check.svg" height="23" width="23" />
              </span>
            </td>
            <td className="meeting">
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
                <Check value={false} />
              </span>
            </td>
            <td className="mekif">
              <Check value={mekifContractData.tailoredMekif} />
            </td>
            <td className="custom">
              <Check value={customContractData.tailoredCustom} />
            </td>{' '}
            <td className="meeting">
              <Check value={meetingContractData.tailoredMeeting} />
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              מס' תיקונים
            </th>
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
                {' '}
                <Check value={false} />
              </span>
            </td>
            <td className="mekif">
              <span className="fs-6 border-bottom col-12">
                <span className="fs-6 border-bottom col-12">
                  <Check value={false} />
                </span>
              </span>
            </td>
            <td className="custom">
              <span className="fs-6 border-bottom col-12">
                <span className="fs-6 border-bottom col-12">{customContractData.numOfFixesCustom}</span>
              </span>
            </td>
            <td className="meeting">
              <span className="fs-6 border-bottom col-12">
                <span className="fs-6 border-bottom col-12">{meetingContractData.numOfFixesMeeting}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              זמן הכנה
            </th>
            <td className="basic">{MakingTime(basicContractData.numOfFixesBasic)}</td>
            <td className="mekif">{MakingTime(mekifContractData.numOfFixesMekif)}</td>
            <td className="custom">{MakingTime(customContractData.numOfFixesCustom)}*</td>
            <td className="meeting">{MakingTime(meetingContractData.numOfFixesMeeting)}*</td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              רמת הגנה
            </th>
            <td className="basic">
              <Stars amount={basicContractData.levelOfProtectionBasic} />
            </td>
            <td className="mekif">
              {' '}
              <Stars amount={mekifContractData.levelOfProtectionMekif} />
            </td>
            <td className="custom">
              {' '}
              <Stars amount={customContractData.levelOfProtectionCustom} />
            </td>
            <td className="meeting">
              {' '}
              <Stars amount={meetingContractData.levelOfProtectionMeeting} />
            </td>
          </tr>
          <tr>
            <th scope="row" className="col-2 lightBlue border-white">
              אחריות משפטית
            </th>
            <td className="basic">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td className="mekif">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td className="custom">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/out.svg" height="23" width="23" />
              </span>
            </td>
            <td className="meeting">
              <span className="fs-6 border-bottom col-12">
                <img src="../assets/icons/check.svg" height="23" width="23" />
              </span>
            </td>
          </tr>
          <tr className=" border-white">
            <th scope="row" className="col-2 lightBlue border-white">
              מחיר
            </th>
            <td className="basic">ללא עלות</td>
            <td className="mekif">{mekifContractData.priceMekif} ש"ח</td>
            <td className="custom">{customContractData.priceCustom} ש"ח</td>
            <td className="meeting">{meetingContractData.priceMeeting} ש"ח</td>
          </tr>
          <tr className="border-top-0 border-white">
            <th scope="row" className="col-2 text-muted ">
              בכפוף לתנאי השימוש*
            </th>
            <td className="w3 basic">
              <div
                className="btn p-1 border w-75 border-white tableBtn f16 w3"
                data-free={true}
                data-contractid={id}
                data-pack={'בסיסי'}
                data-localImg={'asjmdlkasjmdlkajsdlajisdasdasdasdjsioidj'}
              >
                הורד
              </div>
            </td>
            <td className="w3 mekif">
              <div
                className="btn p-1 border w-75 border-white tableBtn clickable f16 w3"
                data-contractid={id}
                data-pack={'מקיף'}
                data-localImg={'fsmklndfsdnhdjfkisnfjksndfkjsndfkjsnkfjnsd'}
              >
                בצע רכישה
              </div>
            </td>
            <td className="w3 custom">
              <div
                className="btn p-1 border w-75 border-white tableBtn clickable f16 w3"
                data-contractid={id}
                data-pack={'התאמה אישית'}
                data-localImg={'aslkjdauiohdhdghdbaybsascyubcsyabcysc'}
              >
                בצע רכישה
              </div>
            </td>
            <td className="w3 meeting">
              <div
                className="btn p-1 border w-75 border-white tableBtn clickable f16 w3"
                data-contractid={id}
                data-pack={'פגישת ייעוץ'}
                data-localImg={'sdifbnidkfnsudfdflndfuiosdfiusndfuisndu'}
              >
                קבע פגישה
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {iconType == 'payment' ? (
        <div className="col-10 d-flex mb-xxl-0 mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3 flex-row flex-wrap justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center align-items-center align-self-center ">
          <div className="col-xxl-3 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/ssl.svg" height="85" width="85" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/mc_symbol.svg" height="60" width="60" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/pci.svg" height="85" width="85" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/bit.svg" height="60" width="60" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/isracard.svg" height="60" width="60" />
          </div>
          {/* <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-2 p-1 itemsLine">
            <img src="../assets/img/visa.png" height="60" width="60" />
          </div> */}
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
