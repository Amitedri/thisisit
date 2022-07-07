import React from 'react';
import './TopSearchBar.css';
import $ from 'jquery';
import Search from '../Search'
const TopSearchBar = () => {
  return (
    <div className="container-fluid d-flex flex-row-reverse topSearchBar justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-center green ">
      {/* contact img */}
      <div className="col-auto align-self-center d-flex flex-column m-2 bg-white ps-2 pe-2 pt-1 pb-1" style={{ border: '2px solid #46A592' }}>
        <a href="#" className="text-dark" style={{ all: 'unset' }}>
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
    
    <Search/>

      {/* contact banner */}
      <div className="col-auto align-self-center d-flex flex-column me-2 mb-2">
        <a href="#" className="text-dark" style={{ all: 'unset' }}>
          <div className="d-flex justify-content-center ">
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
