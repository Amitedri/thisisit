import "./ProductPage.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import { allProdcts, allServices } from "../../sampleData";

const BuyCard = ({ header, cost, buttonText }) => {
  return (
    <div class="col p-4">
      <div class="card text-center bg-light">
        <h1 className="card-header f18 p-5 bg-light ">{header}</h1>
        <div class="card-body p-5">
          <p class="card-text">{cost}</p>
        </div>
        <a href="#" class="btn w-100 yellow">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
const ProductPage = () => {
  const imgSrc = "./assets/img/service.png";
  const cardsData = [
    { type: "חינמי", cost: "חינם", buttonText: "הורד" },
    { type: "הסכם", cost: "350", buttonText: "רכוש" },
    { type: "פגישת ייעוץ", cost: "350", buttonText: "קבע עכשיו" },
  ];
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* large image with button */}
      <div className="row p-0 d-flex flex-row">
        <div className="col d-flex flex-column text-center lightBlue">
          <h1 className="f42 text-white mt-3">כותרת</h1>
          <h2 className="f20 p-2 text-white">
            טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
            טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט{" "}
          </h2>
          <div className="row p-0 d-flex flex-row">
            {cardsData.map((el) => (
              <BuyCard cost={el.cost} key={el.type} buttonText={el.buttonText} header={el.type} />
            ))}
          </div>
        </div>
        <img src={imgSrc} className="w-50 p-0" />
      </div>

      {/* <ContactsUs key={"sdnjnnnnn"}/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/>
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh"/> */}
    </div>
  );
};

export default ProductPage;
