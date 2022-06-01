import './ServicePage.css';
import ContactsUs from '../../components/ContactUs';
import ProductSlider from '../../components/ProductSlider';
import { allProdcts, allServices } from '../../sampleData';
import FAQ from '../../components/FAQ';
import { useEffect, useState } from 'react';
import FullList from '../../components/FullList';
import ExpandedProducs from '../../components/ExpandedProduct';
import { useParams } from 'react-router-dom';
import servicesList from '../../Data/Services';
import { compact, without } from 'lodash';
const ServicePage = () => {
  const [pageContent, setPageContent] = useState([]);
  const [header, setHeader] = useState('');
  const [doc, setDoc] = useState([]);
  const imgSrc = '../assets/img/service.png';
  const { id } = useParams();
  const companies = servicesList.filter((el) => el.categoryHeb === 'חברות');
  useEffect(() => {
    var copy = {};
    servicesList.forEach((el) => {
      if (el.id == id) {
        setHeader(() => el.h1);
        const { h1, h1Content, h2, h2Content, h3, h3Content, h4, h4Content, h5, h5Content, h6, h6Content } = el;
        const content = [
          [h1, h1Content],
          [h2, h2Content],
          h3 ? [h3, h3Content] : undefined,
          h4 ? [h4, h4Content] : undefined,
          h5 ? [h5, h5Content] : undefined,
          h6 ? [h6, h6Content] : undefined,
        ];
        const cleanContent = compact(content);
        setPageContent(() => cleanContent);
      }
    });
  }, []);
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* large image with button */}
      <div className="col-12 p-0 position-relative serviceImageContainer">
        <img src={imgSrc} className="w-100 h-100 rounded" />
        <div className="w-100 d-flex flex-column position-absolute contentCenter z-100 h-50 m-auto">
          <h1 className="f42 align-self-center text-white">{header}</h1>
          <div className="d-grid w-25 align-self-center">
            <button className="btn yellow f36 w3 p-2" type="button">
              קבע פגישת ייעוץ
            </button>
          </div>
        </div>
      </div>
      {/* Text Area */}
      <div className="col-12 d-flex flex-column flex-wrap align-content-start align-items-start justify-content-start mt-3" style={{maxHeight:"75vh"}}>
        {pageContent.map((el) => {
          return (
            <div className='col-4 text-end d-flex flex-column p-3'>
              <h1 className="f28">{el[0]}</h1>
              <p className="f16">{el[1]}</p>
            </div>
          );
        })}
      </div>
      <ContactsUs key={'sdnjnnnnn'} />
      <FullList componentHeader={'מקרקעין'} dataToRender={companies} key="sdsdhhhh" Children={ProductSlider} ExpandedProducts={ExpandedProducs} />
      <FullList componentHeader={'מקרקעין'} dataToRender={companies} key="sdsdasahhhh" Children={ProductSlider} ExpandedProducts={ExpandedProducs} />
      <FullList componentHeader={'מקרקעין'} dataToRender={companies} key="sdsdddadhhhh" Children={ProductSlider} ExpandedProducts={ExpandedProducs} />
    </div>
  );
};

export default ServicePage;
