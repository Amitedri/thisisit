export const Product = ({ title, description, buttonText, actionButtonText,href,imgSrc }) => {
  return (
    <div className="card align-items-center p-0">
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center">
        {description}</p>
        <a href={href} className="btn yellow text-white m-1 w-75">
        {buttonText}
          </a>
          <a href="/checkout" className="btn yellowLight text-white m-1 w-75">
          {actionButtonText}
          </a>
      </div>
    </div>
  );
};

  export default Product;