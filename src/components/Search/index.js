import React from 'react';
import './Search.css';
import $ from 'jquery';
const Search = () => {
  return (
    <div
      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-10 d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2"
      style={{ height: '65px' }}
    >
      <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
      <input className="col f18 customSearchBar p-3" type="text" placeholder="חפש.." />
    </div>
  );
};

export default Search;
