import React from "react";
import "./TopSearchBar.css";
import $ from "jquery";
const TopSearchBar = () => {


  return (
    <div className="container-fluid d-flex flex-row-reverse topSearchBar justify-content-between green">
      {/* icons container */}
      <div className="col-auto align-self-center d-flex flex-wrap">
        {/* logo */}
        < a href="http://localhost:3000">
        <img src="./assets/img/lgLogo.jpg" className="m-2 logoIcon align-self-center" />
        </a>
      </div>

      {/* search container */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-5 col d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2 border-white" style={{height:"65px"}}>
        <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
        <input className="col f18 customSearchBar p-3" type="text" placeholder="חפש.." />
      </div>

      {/* contact banner */}
      <div className="col-auto align-self-center d-flex flex-column">
        <a href="#" className="text-dark" style={{all:'unset'}}>
        <div className="d-flex justify-content-center ps-4 pe-4">
          <span className="align-self-center f16 w3 p-1">צור קשר עכשיו</span>
        </div>
        <hr className="lineLength m-auto" />
        <div className="d-flex justify-content-center">
          <span className="align-self-center f16 w3">052-281-3907</span>
        </div>
      </a>

      </div>
    </div>
  );
};

export default TopSearchBar;
