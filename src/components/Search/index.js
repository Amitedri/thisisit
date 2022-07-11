import React from 'react';
import './Search.css';
import $ from 'jquery';
const Search = () => {
  return (
    <div
      className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none d-none  d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2"
      style={{ maxHeight: '65px' }}
    >
      <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
      <input className="col f18 customSearchBar p-3" type="text" placeholder="חפש.." />
    </div>
  );
};

export default Search;
