import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import ProductSlider from '../../components/ProductSlider';
import ContractPreview from '../../components/ContractPreview';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import servicesList from '../../Data/Services';
import { general } from '../../Data/Questions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import previewContracts from '../../Data/ContractExport';
import PriceTable from '../../components/PriceTable';
import SmPriceTable from '../../components/SmTable';
const ProductPage = () => {
  const generalServices = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const { id } = useParams();
  const [disclaimer, setDisclaimer] = useState('');
  const [title, setTitle] = useState('');
  const [disclaimertitle, setDisclaimerTitle] = useState('');
  const [contractBody, setContractBody] = useState('');

  const [signTitle, setSignTitle] = useState('');
  const [whoSignLine, setWhoSignLine] = useState('');
  const [firstSigner, setFirstSigner] = useState('');
  const [secondSigner, setSecondSigner] = useState('');
  useEffect(() => {
    const doc = previewContracts.filter((el) => el.id == id);
    const { contractBody, disclaimer, firstSigner, title, price, secondSigner, signInDate } = doc[0];
    setDisclaimer(disclaimer);
    setTitle(title);
    setContractBody(contractBody);
    setDisclaimerTitle(title);

    setSignTitle(title);
    setWhoSignLine(title);
    setFirstSigner(firstSigner);
    setSecondSigner(secondSigner);
  }, []);
  const imgSrc = '../assets/img/service.png';
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center p-0 overflow-hidden rounded-2">
      {/* large image with button */}
      <div className="row p-0 d-flex flex-row">
        <div className="col d-flex flex-column text-center bg-white border-bottom p-0">
      <SmPriceTable iconType="another"/>
        </div>
        <img src={imgSrc} className="col-6 p-0 rounded" />
      </div>
      <ContractPreview
        key={'asdasaasdsddasdasdsa'}
        firstSigner={firstSigner}
        seocondSigner={secondSigner}
        title={title}
        whoSign={whoSignLine}
        contractBody={contractBody}
      />
      <StandUp key={'asdasadasdasdsfffa'} />
      <FAQ header={'שאלות ותשובות בנושא משפחה'} withTitle="true" questions={general} />
      <ContactsUs key={'sdnjnnnnn'} />
    </div>
  );
};

export default ProductPage;
