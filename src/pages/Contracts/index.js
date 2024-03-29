import './Contracts.css';
import ProductSlider from '../../components/ProductSlider';
import ContactUs from '../../components/ContactUs';
import FullList from '../../components/FullList';
import DropDown from '../../components/DropDown';
import ExpandedProduct from '../../components/ExpandedProduct';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';
import { useCallback, useEffect, useState } from 'react';
import LinksDrop from '../../components/LinksDrop';
import { useParams } from 'react-router-dom';

const Contracts = ({ previewContracts, servicesList }) => {
  const [typeFilter, setTypeFilter] = useState('');
  const [filterServicesList, setFilterServicesList] = useState([{ h1: 'לפי שם' }, ...previewContracts]);
  const generalServices = previewContracts.filter((el) => el.categoryHeb === 'כללי');
  const realestateServices = previewContracts.filter((el) => el.categoryHeb === 'מקרקעין');
  const familyServices = previewContracts.filter((el) => el.categoryHeb === 'משפחה');
  const companyServices = previewContracts.filter((el) => el.categoryHeb === 'חברות וסטארט אפ');
  const workServices = previewContracts.filter((el) => el.categoryHeb === 'עבודה');
  const [relatedList, setRelatedList] = useState([]);
  let { cat } = useParams();

  console.log(cat);
  const onFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };


  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cat = urlParams.get('cat');
    console.log(cat);
    if (cat) {
      setTypeFilter(cat);
      const relatedCategoryService = servicesList.filter((el) => el.categoryHeb === cat);
      console.log("relatedCategoryService yes",relatedCategoryService)
      setRelatedList(relatedCategoryService);
      return
    }
    else{
      const relatedCategoryService = servicesList.filter((el) => el.categoryHeb === "כללי");
      console.log("relatedCategoryService no",relatedCategoryService)

      setRelatedList(relatedCategoryService);
    }
  }, []);
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
      title: 'חברות וסטארט אפ',
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
      title: 'חברות וסטארט אפ',
    },
    {
      title: 'כללי',
    },
    {
      title: 'מקרקעין',
      
    },
    {
      title: 'עבודה',
      
    },
  ];
      
      const BackedSlider = useCallback(()=><ProductSlider componentHeader={'שירותי המשרד'} dataToRender={relatedList} key={'dsdsdskbjnbjlmklmlkmdlk'} />,[relatedList])
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center justify-content-center align-content-center mt-2">
      {/* header */}
      <h1 className="f32 w5">הסכמים מעולים מבית טוב</h1>
      <div className="col-12 mt-2 d-flex flex-row align-items-center flex-wrap ">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-center text-center d-flex flex-column align-items-center justify-content-center">
          <p className="f18 m-1 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-11 text-center">
          מהיום, לא צריך לשלם אלפי שקלים עבור רכישת הסכמים וחוזים, בדף זה תוכלו למצוא עשרות הסכמים לדוגמא ולרכישה ממגוון רחב של תחומי המשפט.
          </p>
          {/* <hr className="w-90 m-1" /> */}
          <ul className="f18 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-11 col-11 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-end text-end d-flex flex-column w3">
            <span className="fw-bold text-center f22 lightBlueText " style={{ textDecoration: 'underline' }}>
            באפשרותכם לרכוש במהירות באתר:
            </span>
            <li className="w2" style={{ listStyleType: 'decimal' }}>
            הסכם מקיף ומקצועי במחיר שווה לכל נפש.            </li>
            <li className="w2" style={{ listStyleType: 'decimal' }}>
            חבילת "התאמה אישית" הכוללת פגישה עם עורך דין ממשרדנו למטרת ניסוח ועריכה של סעיפי ההסכם המקיף שרכשתם לפי בקשתכם תוך 2 ימי עסקים.             </li>
            <li className="w2" style={{ listStyleType: 'decimal' }}>
            חבילת "ייעוץ אישית" הכוללת פגישה עם עורך דין ממשרדנו שמטרתה לבחון עבורכם את מלוא הנסיבות, העובדות וצרכיכם האישיים, ועריכת הסכם מיטבי בעל אחריות משפטית תוך 7 ימי עסקים.             </li>
          </ul>
          <p className="f18 m-1 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-11 col-11 w3 text-center">
          במידה ואינכם מוצאים הסכם בו אתם מעוניינים אנא צרו קשר עם משרדנו ונשמח לעזור לכם. משרדנו מציע גם שירותי גישור וניהול משא ומתן עד לכריתת הסכם.          </p>
        </div>
      </div>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-2">
        <h3 className="f26 greyText">חפש הסכם</h3>
        <hr className="w-90 m-1" />

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center">
          <DropDown header={'תחום משפטי'} key={'קטגוריות'} colorClass="lightBlue" values={legalCategory} onChange={onFilterChange} />
          {/* <DropDown header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} /> */}
          <LinksDrop header={'הסכמים וחוזים'} key={'סוג המסמך'} colorClass="lightBlue" values={filterServicesList} subdomain="contract" />
        </div>
      </div>
      {/* documents */}
      <FullList
        category={'מקרקעין'}
        dataToRender={realestateServices}
        componentHeader={'מקרקעין'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        type="contract"
        key="dfjksndfjksndjkfsndjkfnsdjkf"
      />
      <FullList
        category={'משפחה'}
        dataToRender={familyServices}
        componentHeader={'משפחה'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        type="contract"
        key="dsfnjsdkndfjjkfnsdjkf"
      />
      <FullList
        category={'חברות וסטארט אפ'}
        dataToRender={companyServices}
        componentHeader={'חברות וסטארט אפ'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        type="contract"
        key="dsfnjsdkndfjjkfnsdjmkljmklmklmjkf"
      />
      <FullList
        category={'עבודה'}
        dataToRender={workServices}
        componentHeader={'עבודה'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        type="contract"
        key="fsdklfjsiondfiosnfiosniofnsidfnsiodf"
      />
      <FullList
        category={'כללי'}
        dataToRender={generalServices}
        componentHeader={'כללי'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjksndfjksndjkfsndjkfnsdjkf"
        type="contract"
      />

      <ContactUs key={'dsdsdskbjnbjlkmklmklmlkmlk'} />
      <BackedSlider/>
    </div>
  );
};

export default Contracts;
