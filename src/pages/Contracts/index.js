import "./Contracts.css";
import ProductSlider from "../../components/ProductSlider";
import ContactUs from "../../components/ContactUs";
import FullList from "../../components/FullList";
import DropDown from "../../components/DropDown";
import ExpandedProduct from "../../components/ExpandedProduct";

import { allProdcts, allServices } from "../../sampleData";


const Contracts = () => {
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-50 mt-5 d-flex flex-column align-items-center text-center">
        <h1 className="f32 w5">כותרת</h1>
        <p className="f16 text-center m-1">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
        </p>
        טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
        <hr className="w-100 m-1" />
        <span className="f16 text-center">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
  
        </span>
        <div className="col-12 d-flex flex-row justify-content-center mt-5">
          <DropDown header={"תחום משפטי"} key={"קטגוריות"} colorClass="lightBlue"/>
          <DropDown header={"הסכמים וחוזים"} key={"סוג המסמך"} colorClass="lightBlue"/>
        </div>
      </div>
      {/* documents */}
      <FullList dataToRender={allProdcts} componentHeader={"מקרקעין"} Children={ProductSlider} ExpandedProducts={ExpandedProduct}  />
      <FullList dataToRender={allProdcts} componentHeader={"משפחה"} Children={ProductSlider} ExpandedProducts={ExpandedProduct} />
      <FullList dataToRender={allProdcts} componentHeader={"גירושים"} Children={ProductSlider} ExpandedProducts={ExpandedProduct} />
      <ContactUs key={"dsdsdskbjnbjlknknmklmklmklmlkmlk"}/>
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={allServices} key={"dsdsdskbjnbjlmklmlkmdlk"} />

    </div>
  );
};

export default Contracts;
