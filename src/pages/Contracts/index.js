import './Contracts.css';
import ProductSlider from '../../components/ProductSlider';
import ContactUs from '../../components/ContactUs';
import FullList from '../../components/FullList';
import DropDown from '../../components/DropDown';
import ExpandedProduct from '../../components/ExpandedProduct';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';
import { useEffect, useState } from 'react';
import LinksDrop from '../../components/LinksDrop';
import { useParams } from 'react-router-dom';



const Contracts = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [filterServicesList, setFilterServicesList] = useState([{h1:"לפי שם"},...previewContracts]);
  const generalServices = previewContracts.filter((el) => el.categoryHeb === 'כללי');
  const realestateServices = previewContracts.filter((el) => el.categoryHeb === 'מקרקעין');
  const familyServices = previewContracts.filter((el) => el.categoryHeb === 'משפחה');
  const companyServices = previewContracts.filter((el) => el.categoryHeb === 'חברות');
  let {cat} = useParams();
  console.log(cat)
  const onFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cat = urlParams.get('cat')
    console.log(cat);
    if(cat){
      setTypeFilter(cat)
    }
  },[])
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
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center justify-content-center align-content-center mt-2">
      {/* header */}
      <h1 className="f32 w5">הסכמים מעולים מבית טוב</h1>
      <div className="col-12 mt-2 d-flex flex-row align-items-center flex-wrap ">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-center text-center d-flex flex-column align-items-center justify-content-center">
          <p className="f18 m-1 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-11 text-center">
            מהיום, לא צריך לשלם אלפי שקלים עבור רכישת הסכמים וחוזים, בדף זה תוכלו למצוא עשרות הסכמים לדוגמא מכל תחומי המשפט.{' '}
          </p>
          {/* <hr className="w-90 m-1" /> */}
          <ul className="f18 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-11 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-end text-end d-flex flex-column w3 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <span className="w3 text-center f22 yellowText" style={{textDecoration:"underline"}}>
          באפשרותכם לרכוש במהירות:

            </span>
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
          <p className="f18 m-1 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-11 col-11 w3 text-center">
            במידה ואינכם מוצאים הסכם בו אתם מעוניינים צרו קשר עם משרדנו ונשמח לשלוח לכם. משרדנו מציע גם שירותי ניהול משא ומתן וגישור מכל סוג עד לכריתת הסכם.{' '}
          </p>
        </div>
      </div>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-2">
        <h3 className="f26 greyText">חפש הסכם</h3>
        <hr className="w-90 m-1" />

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center">
          <DropDown header={'תחום משפטי'} key={'קטגוריות'} colorClass="lightBlue" values={legalCategory} onChange={onFilterChange} />
          {/* <DropDown header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} /> */}
          <LinksDrop header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={filterServicesList} subdomain="contract"/>
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
        category={'חברות'}
        dataToRender={companyServices}
        componentHeader={'חברות'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjjkfnsdjmkljmklmklmjkf"
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
      <ProductSlider componentHeader={'שירותי המשרד'} dataToRender={servicesList} key={'dsdsdskbjnbjlmklmlkmdlk'} />
    </div>
  );
};

export default Contracts;
