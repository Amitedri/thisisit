import "./Contracts.css";
import ProductSlider from "../../components/ProductSlider";
import ContactUs from "../../components/ContactUs";
import FullList from "../../components/FullList";
import DropDown from "../../components/DropDown";
import ExpandedProduct from "../../components/ExpandedProduct";

import contractsList from '../../Data/Contracts'
const Contracts = () => {
  const generalServices= contractsList.filter((el)=>el.categoryHeb === "כללי")
  const realestateServices= contractsList.filter((el)=>el.categoryHeb === "מקרקעין");
  const familyServices= contractsList.filter((el)=>el.categoryHeb === "משפחה");
  const companyServices= contractsList.filter((el)=>el.categoryHeb === "חברות");

  // const data = contractsList.map((el)=>{
  //   const resultObj = {};
  //   const c
  // })

  const serviceCategoryDrop = [
    {
      title: 'משפחה',
    },
    {
      title: 'ממון',
    },{
      title: 'חברות',
    },{
      title: 'כללי',
    },
  ];

  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-50 mt-5 d-flex flex-column align-items-center text-center mb-5">
        <h1 className="f32 w5">כותרת</h1>
        <p className="f16 text-center m-1">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        </p>
        טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        <hr className="w-100 m-1" />
        <span className="f16 text-center">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
        </span>
        <div className="col-12 d-flex flex-row justify-content-center mt-5">
          <DropDown header={"תחום משפטי"} key={"קטגוריות"} colorClass="lightBlue" values={serviceCategoryDrop} />
          <DropDown header={"הסכמים וחוזים"} key={"סוג המסמך"} colorClass="lightBlue" values={serviceCategoryDrop} />
        </div>
      </div>
      {/* documents */}
      <FullList
        dataToRender={generalServices}
        componentHeader={"מקרקעין"}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dfjksndfjksndjkfsndjkfnsdjkf"
      />
      <FullList
        dataToRender={generalServices}
        componentHeader={"משפחה"}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjjkfnsdjkf"
      />
      <FullList
        dataToRender={generalServices}
        componentHeader={"גירושים"}
        Children={ProductSlider}
        ExpandedProducts={ExpandedProduct}
        key="dsfnjsdkndfjksndfjksndjkfsndjkfnsdjkf"
      />
      <ContactUs key={"dsdsdskbjnbjlkmklmklmlkmlk"} />
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={generalServices} key={"dsdsdskbjnbjlmklmlkmdlk"} />
    </div>
  );
};

export default Contracts;
