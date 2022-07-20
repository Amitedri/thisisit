import './Services.css';
import ProductSlider from '../../components/ProductSlider';
import ContactUs from '../../components/ContactUs';
import FullList from '../../components/FullList';
import DropDown from '../../components/DropDown';
import ExpandedProduct from '../../components/ExpandedProduct';
import servicesList from '../../Data/Services';
import { allProdcts, allServices } from '../../sampleData';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import LinksDrop from '../../components/LinksDrop';

const serviceCategoryDrop = [
  { title: 'תחום משפטי' },
  {
    title: 'משפחה',
  },

  { title: 'מקרקעין' },
  {
    title: 'חברות',
  },
  {
    title: 'כללי',
  },
];
const Services = () => {
  const [filterServicesList, setFilterServicesList] = useState([{h1:"לפי שם"},...servicesList]);

  const companies = servicesList.filter((el) => el.categoryHeb === 'חברות');
  const family = servicesList.filter((el) => el.categoryHeb === 'משפחה');
  const general = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const money = servicesList.filter((el) => el.categoryHeb === 'ממון');
  const realestate = servicesList.filter((el) => el.categoryHeb === 'מקרקעין');

  const [typeFilter, setTypeFilter] = useState('');

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
        if (typeFilter === 'תחום משפטי') {
          el.classList.remove('d-none');
        }
      });
    }
  }, [typeFilter]);


  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="col-12 mt-2 d-flex flex-column justify-content-center align-items-center text-center mb-2">
        <h1 className="f32 w5">שירותי המשרד</h1>
        <ul className="col-11 p-0 d-flex flex-column justify-content-start text-center align-items-center">
          <p className="f18 text-center m-1">
            משרד עו"ד אלעד כהן מתמחה במגוון רחב של תחומי המשפט המסחרי והאזרחי. המשרד דוגל בהענקת שירות מקצועי, יסודי, סבלני ובגובה העיניים ללקוחותיו. במסגרת
            שירותי המשרד אנו מעניקים ללקוחותינו שירות משפטי בתחומים הבאים:
          </p>
          <li style={{listStyle:"decimal"}} className="mt-1 f18 text-center">
            <strong>הסכמים וחוזים</strong>- המשרד בעל התמחות מיוחדת בעריכת כל סוגי ההסכמים מכל תחומי המשפט ובניהול משא ומתן עד לכריתת הסכם. כמו כן, אנו מציעים
            ללקוחותינו חוות דעת נוספת על הסכם עליו הם עתידים לחתום.
          </li>
          <li style={{listStyle:"decimal"}} className="mt-1 f18 text-center">
            <strong> עורך דין מסחרי </strong>- ליווי עסקים וחברות משלב ההקמתם כגון: פתיחת ורישום חברה, העברת מניות, עריכת תקנון, ניסוח הסכמי שותפות ומייסדים,
            הסכמי סודיות ועוד. המשרד מציע לחברות ועסקים את שירותיו בליווי חודשי קבוע, או, באופן חד פעמי לפי דרישת הלקוח.
          </li>
          <li style={{listStyle:"decimal"}} className="mt-1 f18 text-center">
            <strong> עורך דין מקרקעין </strong>- ליווי עסקאות מקרקעין, רישום זכויות בטאבו או ברשות מקרקעי ישראל (רמ"י), ניהול נכסים פרטיים ועסקיים, ביצוע הליך
            פינוי מושכר וסילוק יד, ליווי ופיקוח בהליך בנייה.
          </li>
          <li style={{listStyle:"decimal"}} className="f18 text-center">
            <strong> עורך דין אזרחי </strong>- בשורותינו עורך דין בעל הסמכה מיוחדת לעריכת ייפוי כוח מתמשך, עריכת צוואה, הגשת בקשה לצו ירושה וצו קיום צוואה,
            אימות חתימה, תביעות ספאם ומכתבי התראה לפני תביעה. 
          </li>
          <li style={{listStyle:"decimal"}} className="f18 text-center">
            <strong> גישור </strong>- המשרד מציע שירות גישור המאפשר קיום דו-שיח חופשי ונעים בין צדדי הליך הגישור לרבות: גישור
            עסקי, גישור משפחתי, גישור בסכסוכי שכנים וגישור בסכסוכי ירושה. עורך דין מגשר אלעד כהן מתמחה ביצירת תקשורת טובה והקניית כלים לצדדי ההליך המאפשרים
            בחינת הסכסוך בראייה אובייקטיבית.
          </li>
          <span className="fw-bold p-1"> לייעוץ ראשוני אנא צרו קשר עם המשרד או שלחו הודעה ונחזור אליכם בהקדם.</span>
        </ul>
        <h3 className="f26 greyText">חפש שירות</h3>
      <hr className="w-90 m-1" />
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-2 d-flex flex-row">
          <DropDown header={'תחום משפטי'} key={'קasasasטגוריות'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} />
          <LinksDrop header={'שירותים משפטיים'} key={'סוג asasasasהמסמך'} colorClass="lightBlue" values={filterServicesList}  subdomain="service" />
        </div>
      </div>
      {/* documents */}
      <FullList
        dataToRender={companies}
        componentHeader={'חברות'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dfdfdfDsdddd"
        category={'חברות'}
      />
      <FullList
        dataToRender={general}
        componentHeader={'כללי'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dffddfddffffdfDsdddd"
        category={'כללי'}
      />
      {/* <FullList dataToRender={money} componentHeader={'ממון'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="sdsdsdsdsdbsfdfdf5"  category={'חברות'}/> */}
      <FullList
        dataToRender={family}
        componentHeader={'משפחה'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dfdfdfdd75b5b4b4b5afDsdddd"
        category={'משפחה'}
      />
      <FullList
        dataToRender={realestate}
        componentHeader={'מקרקעין'}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dfdfdfddafDsdddd"
        category={'מקרקעין'}
      />

      <ContactUs key={'dsdsdskbjnbjlknknmklmklmkdssdslmlkmlk'} />
      <ProductSlider componentHeader={'חוזים לדוגמא'} dataToRender={family} key={'dsdsdskbjnbjlmklssssdSmlkmdlk'} />
    </div>
  );
};

export default Services;
