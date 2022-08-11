import './ServicePage.css';
import ContactsUs from '../../components/ContactUs';
import ProductSlider from '../../components/ProductSlider';
import { allProdcts, allServices } from '../../sampleData';
import FAQ from '../../components/FAQ';
import { useCallback, useEffect, useState } from 'react';
import FullList from '../../components/FullList';
import ExpandedProducs from '../../components/ExpandedProduct';
import { useParams } from 'react-router-dom';
import servicesList from '../../Data/Services';
import { compact, without } from 'lodash';
import previewContracts from '../../Data/ContractExport';

const ServicePage = () => {

  const [pageContent, setPageContent] = useState([]);
  const [header, setHeader] = useState('');
  const [imgSrc, setImgSrc] = useState('../assets/img/service.png');
  const { id } = useParams();
  const [relatedDocs, setRelatedDocs] = useState([]);
  const [relatedContracts, setRelatedContracts] = useState([]);
  const [relatedCat, setRelatedCat] = useState('');
  const companies = servicesList.filter((el) => el.categoryHeb === 'חברות');


  useEffect(() => {
    servicesList.forEach((el) => {
      if (el.id == id) {
        setRelatedCat(el.categoryHeb);
        setHeader(() => el.h1);
        const { h1, h1Content, h2, h2Content, h3, h3Content, h4, h4Content, h5, h5Content, h6, h6Content, imgSrc } = el;
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
        setImgSrc(imgSrc);
      }
    });
  }, []);
  useEffect(() => {
    console.log('relatedCat', relatedCat);
    const target = servicesList.filter((el) => el.categoryHeb === relatedCat);
    let filterTarget = target.filter((el) => el.id !== id);
    console.log('filterTarget', filterTarget);
    const previewContractstarget = previewContracts.filter((el) => el.categoryHeb === relatedCat);

    setRelatedContracts(previewContractstarget);
    if (filterTarget) {
      setRelatedDocs(filterTarget);
    }
  }, [relatedCat]);
  let Backed = useCallback(
    () => (
      <FullList
        componentHeader={'שירותי המשרד'}
        dataToRender={relatedDocs}
        key="sdsdhhhdsfsdfsdfh"
        Children={ProductSlider}
        ExpandedProducts={ExpandedProducs}
      />
    ),
    [relatedDocs]
  );

  let BackedContracts = useCallback(
    () => (
      <FullList componentHeader={'הסכמים לדוגמא'} dataToRender={relatedContracts} key="sdsdhhhh" Children={ProductSlider} ExpandedProducts={ExpandedProducs} />
    ),
    [relatedContracts]
  );
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center">
      {/* large image with button */}
      <div className="col-12 p-0 position-relative serviceImageContainer">
        <img src={imgSrc} className="w-100 h-100  servicesTopImg" />
        <div className="col-12 d-flex flex-column position-absolute contentCenter z-100 h-50 m-auto">
          <h1 className="f42 align-self-center text-white">{header}</h1>
          <div className="d-grid col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 align-self-center">
            <button className="btn yellow f36 w3 p-2" type="button">
              קבע פגישת ייעוץ
            </button>
          </div>
        </div>
      </div>
      {/* Text Area */}
      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-xxl-column flex-xl-column flex-lg-column flex-md-column flex-sm-row flex-row flex-wrap align-content-center align-items-center justify-content-center mt-3">
        {pageContent.map((el) => {
          return (
            <div className="col-12 text-end d-flex flex-column p-3">
              <h1 className="f28">{el[0]}</h1>
              <p className="f18">{el[1]}</p>
            </div>
          );
        })}
      </div>
      <ContactsUs key={'sdnjnnnnn'} />

      <Backed />
      <BackedContracts/>
    </div>
  );
};

export default ServicePage;
