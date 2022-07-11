import './Contracts.css';
import ProductSlider from '../../components/ProductSlider';
import ContactUs from '../../components/ContactUs';
import FullList from '../../components/FullList';
import DropDown from '../../components/DropDown';
import ExpandedProduct from '../../components/ExpandedProduct';

import previewContracts from '../../Data/ContractExport';
import { useEffect, useState } from 'react';
const Contracts = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const generalServices = previewContracts.filter((el) => el.categoryHeb === 'כללי');
  const realestateServices = previewContracts.filter((el) => el.categoryHeb === 'מקרקעין');
  const familyServices = previewContracts.filter((el) => el.categoryHeb === 'משפחה');
  const companyServices = previewContracts.filter((el) => el.categoryHeb === 'חברות');

  const onFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };
  useEffect(() => {
    if (typeFilter) {
      const all = document.querySelectorAll('[data-cat]');
      all.forEach((element) => element.classList.remove('d-none'));
      all.forEach((el) => {
        if (el.dataset.cat !== typeFilter) {
          console.log(el);
          console.log('typeFilter', typeFilter);
          el.classList.add('d-none');
          console.log(el.dataset.cat);
        }
        if (typeFilter === 'הכל') {
          el.classList.remove('d-none');
        }
      });
    }
  }, [typeFilter]);
  const serviceCategoryDrop = [
    {
      title: 'לפי שם',
    },
    {
      title: 'משפחה',
    },

    {
      title: 'כללי',
    },
    {
      title: 'מקרקעין',
    },
  ];
  const legalCategory = [
    {
      title: 'תחום משפטי',
    },
    {
      title: 'משפחה',
    },

    {
      title: 'כללי',
    },
    {
      title: 'מקרקעין',
    },
  ];

  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center justify-content-center align-content-center">
      {/* header */}
      <h1 className="f32 w5">הסכמים מעולים מבית טוב</h1>
      <div className="col-12 mt-2 d-flex flex-row align-items-center flex-wrap ">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-center text-center d-flex flex-column align-items-center justify-content-center">
          <p className="f16 m-1 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 text-center">
            מהיום, לא צריך לשלם אלפי שקלים עבור רכישת הסכמים וחוזים, בדף זה תוכלו למצוא עשרות הסכמים לדוגמא מכל תחומי המשפט.{' '}
          </p>
          <hr className="w-90 m-1 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12" />
          <ul className="f16 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center d-flex flex-column w3 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            באפשרותכם לרכוש במהירות:
            <li className="w2" style={{ listStyleType: 'none' }}>
              הסכם מקיף ומקצועי של ממשרדנו ישירות מהאתר במחיר שווה לכל נפש.
            </li>
            <li className="w2" style={{ listStyleType: 'none' }}>
              הסכם מקיף + 30 דקות התאמה אישית להסכם, תוך 48 שעות.
            </li>
            <li className="w2" style={{ listStyleType: 'none' }}>
              פגישת ייעוץ אישית בת 90 דקות להגנה מיטבית תוך 7 ימי עסקים.
            </li>
          </ul>
          <p className="f16 m-1 col-6 w3 text-center">
            במידה ואינכם מוצאים הסכם בו אתם מעוניינים צרו קשר עם משרדנו ונשמח לשלוח לכם. משרדנו מציע גם שירותי ניהול משא ומתן וגישור מכל סוג עד לכריתת הסכם.{' '}
          </p>
        </div>

        {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center">
          <div className="col-12 d-flex flex-row flex-wrap text-center justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">עלות שווה לכל נפש</span>
              <img className="mt-3" src="../assets/icons/like-heart-round-line.svg" height="25" width="25" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">התאמה אישית תוך 48 שעות</span>
              <img className="mt-3" src="../assets/icons/man-mobile-chat.svg" height="25" width="25" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">קביעת פגישת און ליין</span>
              <img className="mt-3" src="../assets/icons/reservation.svg" height="25" width="25" />
            </div>
          </div>
          <div className="col-12 d-flex flex-row flex-wrap text-center justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">שירות מקצועי ומהיר</span>
              <img className="mt-3" src="../assets/icons/five-stars.svg" height="25" width="25" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">הסכם מלא ומקיף</span>
              <img className="mt-3" src="../assets/icons/excellence-honor.svg" height="25" width="25" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex flex-column justify-content-center align-items-center m-1 border-bottom shadow-sm border border-light">
              <span style={{height:'50px'}} className="col-auto">ייעוץ ראשוני ללא עלות</span>
              <img className="mt-3" src="../assets/icons/free-time.svg" height="25" width="25" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-2">
        <h3 className="f26 greyText">חפש הסכם</h3>
        <hr className="w-100 m-1" />
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center">
          <DropDown header={'תחום משפטי'} key={'קטגוריות'} colorClass="lightBlue" values={legalCategory} onChange={onFilterChange} />
          <DropDown header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} />
        </div>
      </div>
      {/* documents */}
      <FullList
        category={'מקרקעין'}
        dataToRender={realestateServices}
        componentHeader={'מקרקעין'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dfjksndfjksndjkfsndjkfnsdjkf"
      />
      <FullList
        category={'משפחה'}
        dataToRender={familyServices}
        componentHeader={'משפחה'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjjkfnsdjkf"
      />
      <FullList
        category={'כללי'}
        dataToRender={generalServices}
        componentHeader={'כללי'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjksndfjksndjkfsndjkfnsdjkf"
      />
      <ContactUs key={'dsdsdskbjnbjlkmklmklmlkmlk'} />
      <ProductSlider componentHeader={'שירותים לדוגמא'} dataToRender={generalServices} key={'dsdsdskbjnbjlmklmlkmdlk'} />
    </div>
  );
};

export default Contracts;
