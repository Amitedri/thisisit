export const Product = ({ title, description, buttonText, actionButtonText,href,imgSrc,BtnChildren,id }) => {
  return (
    <div className="card align-items-center p-0  col-12">
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body col-12 d-flex flex-column align-items-center text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center f14">
        {description}</p>
        <a href={href} className="btn blue text-white m-1 w-75">
        {buttonText}
          </a>
          <a  className={`btn yellowLight text-white f18  w-75`} data-purchaseid={id}>
          {BtnChildren}
          </a>
      </div>
    </div>
  );
};

  export default Product;