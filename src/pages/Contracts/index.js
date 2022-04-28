import "./Contracts.css";
import ProductSlider from "../../components/ProductSlider";
import ContactUs from "../../components/ContactUs";

import { allProdcts, allServices } from "../../sampleData";
import { v4 as uuidv2 } from 'uuid';

const DropDown = ({ header }) => {
  return (
    <div className="dropdown m-2 w-50">
      <button
        className="btn w-100  lightBlue dropdown-toggle text-white f20"
        type="button"
        id={`dropdownMenuButton${header}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {header}
      </button>
      <ul className="dropdown-menu w-100" aria-labelledby={`dropdownMenuButton${header}`}>
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

const FullProductsList = ({dataToRender,componentHeader}) => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <ProductSlider componentHeader={componentHeader} dataToRender={dataToRender} />
      <a href="#" class="btn yellow w-25 text-white f20 w3">
          פתח עוד
        </a>
    </div>
  );
};
const Contracts = () => {
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      {/* header */}
      <div className="w-50 mt-5 d-flex flex-column align-items-center ">
        <h1 className="f36 w5">כותרת</h1>
        <p className="f20 w3 text-center">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
        </p>
        <hr className="w-100" />
        <span className="f20 w3 text-center">
          טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט
          טסט טסט טסט טסט
        </span>
        <div className="col-12 d-flex flex-row justify-content-center">
          <DropDown header={"קטגוריות"} key={"קטגוריות"} />
          <DropDown header={"סוג המסמך"} key={"סוג המסמך"} />
        </div>
      </div>
      {/* documents */}
      <FullProductsList dataToRender={allProdcts} componentHeader={"מקרקעין"} />
      <FullProductsList dataToRender={allProdcts} componentHeader={"משפחה"} />
      <FullProductsList dataToRender={allProdcts} componentHeader={"גירושים"} />
      <ContactUs key={"dsdsdskbjnbjlknknmklmklmklmlkmlk"}/>
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={allServices} key={"dsdsdskbjnbjlmklmlkmdlk"} />

    </div>
  );
};

export default Contracts;
