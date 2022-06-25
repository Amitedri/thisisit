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
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-100 mt-5 d-flex flex-column align-items-center text-center mb-5">
        <h1 className="f32 w5 mb-3">הסכמים מעולים מבית טוב</h1>
        <h2 className="f26 greyText">משרדנו מתמחה בכל סוגי ההסכמים ומכל תחומי המשפט.</h2>
        <p className="f16 text-center m-1">מהיום, לא צריך לשלם אלפי שקלים עבור רכישת הסכמים וחוזים, בדף זה תוכלו למצוא עשרות הסכמים לדוגמא מכל תחומי המשפט. </p>
        <hr className="w-100 m-1" />
        <ul className="f16 text-end d-flex flex-column w3">
          באפשרותכם לרכוש במהירות:
          <li className="w2" style={{ listStyleType: 'decimal' }}>
            הסכם מקיף ומקצועי של ממשרדנו ישירות מהאתר במחיר שווה לכל נפש.
          </li>
          <li className="w2" style={{ listStyleType: 'decimal' }}>
            הסכם מקיף + 30 דקות התאמה אישית להסכם, תוך 48 שעות.
          </li>
          <li className="w2" style={{ listStyleType: 'decimal' }}>
            פגישת ייעוץ אישית בת 90 דקות להגנה מיטבית תוך 7 ימי עסקים.
          </li>
        </ul>
        <p className="f16 text-center m-1">
          במידה ואינכם מוצאים הסכם בו אתם מעוניינים צרו קשר עם משרדנו ונשמח לשלוח לכם. משרדנו מציע גם שירותי ניהול משא ומתן וגישור מכל סוג עד לכריתת הסכם.{' '}
        </p>

        <div className="col-6 d-flex flex-row">
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
        <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
          <h3 className="f26 greyText">חפש הסכם</h3>
          <hr className="w-100 m-1" />

          <div className="col-6 d-flex flex-row justify-content-center">
            <DropDown header={'תחום משפטי'} key={'קטגוריות'} colorClass="lightBlue" values={legalCategory} onChange={onFilterChange} />
            <DropDown header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} />
          </div>
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
