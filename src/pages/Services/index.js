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
const legalCategoryDrop = [
{title:"הכל"},
  {
    title: 'משפחה',
  },
  
 {title:"מקרקעין"},
  {
    title: 'חברות',
  },
  {
    title: 'כללי',
  },
];
const serviceCategoryDrop = [
{title:"הכל"},
  {
    title: 'משפחה',
  },
  
 {title:"מקרקעין"},
  {
    title: 'חברות',
  },
  {
    title: 'כללי',
  },
];
const Services = () => {
  const companies = servicesList.filter((el) => el.categoryHeb === 'חברות');
  const family = servicesList.filter((el) => el.categoryHeb === 'משפחה');
  const general = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const money = servicesList.filter((el) => el.categoryHeb === 'ממון');
  const realestate = servicesList.filter((el) => el.categoryHeb === 'מקרקעין');

  const [typeFilter, setTypeFilter] = useState('');

  const onFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };
  useEffect(() => {
    if (typeFilter) {
          
      const all = document.querySelectorAll('[data-cat]');
      all.forEach((element)=>element.classList.remove("d-none"))
      all.forEach((el) => {
        if (el.dataset.cat !== typeFilter) {
          console.log(el);
          console.log("typeFilter",typeFilter);
          el.classList.add("d-none");
          console.log(el.dataset.cat);
        }
        if (typeFilter === "הכל") {
          el.classList.remove("d-none");
        }

      });
    }
  }, [typeFilter]);
  console.log(family);
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-50 mt-5 d-flex flex-column align-items-center text-center mb-5">
        <h1 className="f32 w5">כותרת</h1>
        <p className="f16 text-center m-1">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        </p>
        טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        <hr className="w-100 m-1" />
        <span className="f16 text-center">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        </span>
        <div className="col-12 d-flex flex-row justify-content-center mt-5">
          <DropDown header={'תחום משפטי'} key={'קasasasטגוריות'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} />
          <DropDown header={'שירותים משפטיים'} key={'סוג asasasasהמסמך'} colorClass="lightBlue" values={legalCategoryDrop} onChange={onFilterChange} />
        </div>
      </div>
      {/* documents */}
      <FullList dataToRender={companies} componentHeader={'חברות'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dfdfdfDsdddd" category={'חברות'} />
      <FullList dataToRender={general} componentHeader={'כללי'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dffddfddffffdfDsdddd"  category={'כללי'}/>
      {/* <FullList dataToRender={money} componentHeader={'ממון'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="sdsdsdsdsdbsfdfdf5"  category={'חברות'}/> */}
      <FullList dataToRender={family} componentHeader={'משפחה'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dfdfdfdd75b5b4b4b5afDsdddd"  category={'משפחה'}/>
      <FullList dataToRender={realestate} componentHeader={'מקרקעין'} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dfdfdfddafDsdddd"  category={'מקרקעין'}/>

      <ContactUs key={'dsdsdskbjnbjlknknmklmklmkdssdslmlkmlk'} />
      <ProductSlider componentHeader={'חוזים לדוגמא'} dataToRender={family} key={'dsdsdskbjnbjlmklssssdSmlkmdlk'} />
    </div>
  );
};

export default Services;
