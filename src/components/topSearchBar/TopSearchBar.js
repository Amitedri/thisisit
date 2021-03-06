import React from "react";
import "./TopSearchBar.css";
import $ from "jquery";
const TopSearchBar = () => {
  const onType = (e) => {
    if (e.target.value.length > 0) {
      $("#searchIcon").addClass("d-none");
      return;
    }
    if (e.target.value.length < 1) {
      $("#searchIcon").removeClass("d-none");
    }
  };

  return (
    <div className="container-fluid d-flex flex-row-reverse topSearchBar justify-content-between p-2 sticky-top green">
      {/* icons container */}
      <div className="col-auto align-self-center d-flex flex-wrap">
        {/* logo */}
        <img src="./assets/img/lgLogo.jpg" className="m-2 logoIcon align-self-center" />
      </div>

      {/* search container */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-5 col d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2 border-white" style={{height:"65px"}}>
        <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
        <input className="col f18 customSearchBar p-3" type="text" placeholder="חפש.." />
      </div>

      {/* contact banner */}
      <div className="col-auto align-self-center d-flex flex-column border border-1 border-dark rounded p-2">
        <div className="d-flex justify-content-center ps-5 pe-5">
          <span className="align-self-center f20">צור קשר עכשיו</span>
        </div>
        <hr className="w-100 m-0 p-0" />
        <div className="d-flex justify-content-center">
          <span className="align-self-center f20">052-281-3907</span>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
