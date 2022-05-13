import "./ProductPage.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import ContractPreview from "../../components/ContractPreview";
import StandUp from "../../components/StandUp";

import { allProdcts, allServices } from "../../sampleData";
import FAQ from "../../components/FAQ";

const BuyCard = ({ header, cost, buttonText }) => {
  return (
    <div class="col p-4">
      <div class="card text-center bg-light">
        <h1 className="card-header f18 bg-light pb-5 pt-5 ">{header}</h1>
        <div class="card-body col p-0">
          <p class="card-text card-text p-2 m-0">{cost}</p>
          <div className="d-grid">
            <a href="#" class="w-100 yellow p-2 text-dark text-decoration-none">
              {buttonText}
            </a>
          </div>
        </div>
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
    <div className="col-10 m-auto d-flex flex-column align-items-center p-0 overflow-hidden">
      {/* large image with button */}
      <div className="row p-0 d-flex flex-row">
        <div className="col d-flex flex-column text-center bg-white border-bottom">
          <h1 className="f42 text-white mt-3 lightBlueText">כותרת</h1>
          <h2 className="f20 p-2 greyText">
            טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
            טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט{" "}
          </h2>
          <div className="row p-0 d-flex flex-row">
            {cardsData.map((el) => (
              <BuyCard cost={el.cost} key={el.type} buttonText={el.buttonText} header={el.type} />
            ))}
          </div>
        </div>
        <img src={imgSrc} className="col-6 p-0 rounded" />
      </div>
      <ContractPreview key={"asdasaasdsddasdasdsa"}/>
      <StandUp key={"asdasadasdasdsfffa"}/>
      <FAQ header={"שאלות ותשובות בנושא משפחה"} withTitle="true" />
      <ContactsUs key={"sdnjnnnnn"} />
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh" />
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh" />
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhhhh" />
    </div>
  );
};

export default ProductPage;
