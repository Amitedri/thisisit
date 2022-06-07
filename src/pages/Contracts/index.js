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
      title: 'הכל',
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
          <DropDown header={'תחום משפטי'} key={'קטגוריות'} colorClass="lightBlue" values={serviceCategoryDrop} onChange={onFilterChange} />
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
