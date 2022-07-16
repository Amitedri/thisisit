import { allProdcts, allServices } from '../../sampleData';
const Product = ({ title, description, buttonText, actionButtonText,href,imgSrc }) => {
  return (
    <div className="card align-items-center p-0 col-3 m-2 ">
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body d-flex col-12 flex-column align-items-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center f14">{description}</p>
        <a href={href} className="btn blue text-white m-1 w-75">
          {buttonText}
        </a>
        <a href="/checkout" className="btn yellowLight text-white f18  w-75">
          {actionButtonText}
        </a>
      </div>
    </div>
  );
};
const ExpandedProducs = ({ dataToRender }) => {
  return dataToRender.map((el,idx) => {
    const description = el.h1Content.slice(0,120);
    return <Product description={description} title={el.h1} actionButtonText={el.actionButtonText} buttonText={el.buttonText} key={el.id} href={el.href} imgSrc={el.imgSrc} />;
  });
};

export default ExpandedProducs;
