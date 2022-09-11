import { allProdcts, allServices } from '../../sampleData';
import MekifPurchase from '../MekifButton';
import ServiceButton from '../ServiceButton';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, setShowCart, setTermsModal } from '../../Slice';

const Product = ({ title, description, buttonText, actionButtonText, href, imgSrc, BtnChildren, id }) => {
  return (
    <div className="card align-items-center p-0 col-3 m-2 ">
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body d-flex col-12 flex-column align-items-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center f14 cardTxt">{description}</p>
        <a href={href} className="btn blue text-white m-1 w-75">
          {buttonText}
        </a>
        <a className={`btn yellowLight text-white f18  w-75`} data-purchaseid={id}>
          {BtnChildren}
        </a>
      </div>
    </div>
  );
};
const ExpandedProducs = ({ dataToRender, type }) => {
  const generalConsent = useSelector((state) => state.prods.generalConsent);

  const disptach = useDispatch();

  const addItem = (value) => {
    disptach(setTermsModal(true));
    if (generalConsent) {
      disptach(setShowCart(true));
      disptach(addProduct(value));
    }
  };

  return dataToRender.map((el, idx) => {
    const description = ""
    return (
      <Product
        description={description}
        title={el.h1}
        actionButtonText={el.actionButtonText}
        buttonText={el.buttonText}
        key={el.id}
        href={el.href}
        imgSrc={el.imgSrc}
        BtnChildren={type === 'contract' ? MekifPurchase({ data: el, onItemClick: addItem }) : <ServiceButton />}
        id={el.id}
      />
    );
  });
};

export default ExpandedProducs;
