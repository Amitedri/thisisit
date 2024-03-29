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
    title: 'עבודה',
  },
  {
    title: 'חברות',
  },
  {
    title: 'כללי',
  },
];

const LegalInfo = ({ previewContracts, servicesList }) => {
  const [typeFilter, setTypeFilter] = useState('');
  const klali = general.filter((el) => el.category === 'כללי');
  const realestate = general.filter((el) => el.category === 'מקרקעין');
  const family = general.filter((el) => el.category === 'משפחה');
  const work = general.filter((el) => el.category === 'עבודה');
  const companies = general.filter((el) => el.category === 'חברות וסטארט אפ');

  const onFilterChange = (event) => {
    // let splitted = event.target.value.split(" ")[1]
    console.log(event.target.value);
    setTypeFilter(event.target.value);
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cat = urlParams.get('cat');
    console.log(cat);
    if (cat) {
      setTypeFilter(cat);
    }
  }, []);

  
  useEffect(() => {
    if (typeFilter) {
      const all = document.querySelectorAll('[data-cat]');
      all.forEach((element) => element.classList.remove('d-none'));
      console.log(typeFilter);
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
      <h3 className="f26 greyText">חפש מידע </h3>
      <hr className="w-90 m-1" />

      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center mt-2">
        <DropDown header={'תחום משפטי'} key={'קטגוריותsdfsdfקטגוריות'} colorClass="lightBlueStrong" values={serviceCategoryDrop} onChange={onFilterChange} />
      </div>
      <FAQ header={'דיני משפחה'} questions={family} cat={'משפחה'} key="sjdndjksnchdjdfdfknskjdndsndkjsdd" />

      <FAQ header={'דיני עבודה'} questions={work} cat={'עבודה'} key="sjdndjksndjknskjdggggggggggsfggsndsndkjsdd" />

      <FAQ header={'דיני מקרקעין'} questions={realestate} cat={'מקרקעין'} key="sjdndjksgsgfndjknskjdndsndkjsdd" />

      <FAQ header={'דיני חברות'} questions={companies} cat={'חברות'} key="sjdndjksndjfgffgknskjdndsndkjsdd" />

      <FAQ header={'כללי'} questions={klali} cat={'משפחה'} key="sjdndjksndjknskjdndssgsgsgndkjsdd" />
    </div>
  );
};

export default LegalInfo;
