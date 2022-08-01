import React from 'react';
import './TopSearchBar.css';
import $ from 'jquery';
import Search from '../Search';
const TopSearchBar = () => {
  return (
    <div
      className="col-12 d-flex flex-row-reverse topSearchBar justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between
     justify-content-sm-between
     justify-content-between
     green"
    >
      {/* contact img */}
 
        <div className="col-auto align-self-center d-flex flex-column m-2 bg-white ps-2 pe-2 pt-1 pb-1 pointer" style={{ border: '2px solid #46A592' }} onClick={()=>window.location = '/'}>
        <a href="/" className="text-dark" style={{ all: 'unset' }}>
          <div className="d-flex justify-content-center ">
            <span className="align-self-center f12 w5 p-1 lightBlueText" style={{ letterSpacing: '1px' }}>
              COHEN ELAD & CO
            </span>
          </div>
          <hr className="lineLength m-auto" />
          <div className="d-flex justify-content-center">
            <span className="align-self-center w3 f12 p-1">
              <span className="lightBlueText">Digital</span> Law Office
            </span>
          </div>
        </a>
      </div>


      {/* search container */}

      <Search  classlist={"col-xxl-3 col-xl-3 col-lg-6 col-md-6 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none d-none  d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2"}/>

      {/* contact banner */}
      <div className="col-auto align-self-center d-flex flex-column me-2 mb-2">
        <a  className="text-dark" style={{ all: 'unset' }}>
          <div className="d-flex justify-content-center ">
            <span className="align-self-center f16 w3 p-1" >צור קשר עכשיו</span>
          </div>
          <div className="d-flex justify-content-center mt-1">
            <a href="tel:0508081119" style={{textDecoration:"underline"}} className="align-self-center f16 w3 blueText">052-281-3907</a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopSearchBar;
