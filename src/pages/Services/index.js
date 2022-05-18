import "./Services.css";
import ProductSlider from "../../components/ProductSlider";
import ContactUs from "../../components/ContactUs";
import FullList from "../../components/FullList";
import DropDown from "../../components/DropDown";
import ExpandedProduct from "../../components/ExpandedProduct";

import { allProdcts, allServices } from "../../sampleData";


const Services = () => {
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-50 mt-5 d-flex flex-column align-items-center text-center mb-5">
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
          <DropDown header={"תחום משפטי"} key={"קasasasטגוריות"} colorClass="lightBlue"/>
          <DropDown header={"שירותים משפטיים"} key={"סוג asasasasהמסמך"} colorClass="lightBlue"/>
        </div>
      </div>
      {/* documents */}
      <FullList dataToRender={allProdcts} componentHeader={"שירותי מקרקעין"} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dfdfdfDsdddd"  />
      <FullList dataToRender={allProdcts} componentHeader={"שירותי משפחה"} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dffddfddffffdfDsdddd" />
      <FullList dataToRender={allProdcts} componentHeader={"שירותי גירושים"} Children={ProductSlider} ExpandedProducts={ExpandedProduct} key="dfdfdfddafDsdddd" />
      <ContactUs key={"dsdsdskbjnbjlknknmklmklmkdssdslmlkmlk"}/>
      <ProductSlider componentHeader={"חוזים לדוגמא"} dataToRender={allServices} key={"dsdsdskbjnbjlmklssssdSmlkmdlk"} />

    </div>
  );
};

export default Services;
