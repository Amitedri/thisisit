import "./TextComponent.css";
const TextComponent = ({ imgSrc, header, subHeader, text, backgroundColor }) => {
  return (
    <div className="row d-flex flex-row flex-wrap mt-5 mb-5 rounded" style={{ backgroundColor: backgroundColor }}>
      {/* side rounded image */}
      <div className="col d-flex justify-content-center">
        <img src={imgSrc} className="p-3" />
      </div>
      {/* text container */}
      <div className="col-7 d-flex flex-column align-items-start mt-2">
        <h1 className="m-0 p-0 f32 text-right">{header}</h1>
        <h2 className="m-0 p-0 f26 text-right greyText mt-2">{subHeader}</h2>
        <span className="m-0 p-0 fw-2 text-right w-75 mt-2">{text}</span>
      </div>
    </div>
  );
};
export default TextComponent;
