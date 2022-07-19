import { useEffect, useState } from 'react';
import DropDown from '../../components/DropDown';
import FAQ from '../../components/FAQ';
import { general } from '../../Data/Questions';
const serviceCategoryDrop = [
  {
    title: 'תחום משפטי',
  },
  {
    title: 'משפחה',
  },
  {
    title: 'ממון',
  },
  {
    title: 'חברות',
  },
  {
    title: 'כללי',
  },
];

const LegalInfo = () => {
  const [typeFilter, setTypeFilter] = useState('');

const onFilterChange = (event) => {
  setTypeFilter(event.target.value);
};

useEffect(() => {
  if (typeFilter) {
    const all = document.querySelectorAll('[data-cat]');
    all.forEach((element) => element.classList.remove('d-none'));
    console.log(typeFilter)
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
      <h1 className="f32 w5 mb-2 mt-2">מידע משפטי</h1>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center mt-2">
        <DropDown header={'תחום משפטי'} key={'קטגוריותsdfsdfקטגוריות'} colorClass="lightBlueStrong" values={serviceCategoryDrop} onChange={onFilterChange} />
        <DropDown header={'שאלה משפטית'} key={'שאלהasdasdasds משפטית'} colorClass="lightBlueStrong" values={serviceCategoryDrop} onChange={onFilterChange} />
      </div>
      <FAQ header={'משפחה'} questions={general} />
      
      <FAQ header={'ממון'} questions={general} />
      
      <FAQ header={'מקרקעין'} questions={general} />
      
      <FAQ header={'חברות'} questions={general} />
      
      <FAQ header={'כללי'} questions={general} />
      
    </div>
  );
};

export default LegalInfo;
