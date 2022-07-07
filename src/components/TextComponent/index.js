import "./TextComponent.css";
const TextComponent = ({ imgSrc, header, subHeader, text, backgroundColor,textHeaderColor,textColor }) => {
  return (
    <div className="col-12 d-flex flex-row flex-wrap rounded pb-3 pt-3" style={{ backgroundColor: backgroundColor,color:textHeaderColor }}>
      {/* side rounded image */}
      <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
        <img src={imgSrc} className="p-3 textComponentImg" />
      </div>
      {/* text container */}
      <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column align-items-xxl-start align-items-xl-start align-items-lg-center align-items-md-center align-items-sm-center align-items-center mt-2 text-xxl-end text-xl-end text-lg-center text-md-center text-sm-center text-center">
        <h1 className="m-0 p-0 f32 text-right">{header}</h1>
        <h2 className="m-0 p-0 f26 text-right greyText mt-2">{subHeader}</h2>
        <span className="m-0 p-0 fw-2 text-right w-75 mt-2">{text}</span>
      </div>
    </div>
  );
};
export default TextComponent;
