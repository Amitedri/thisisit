import React, { useEffect, useState } from 'react';
import './Search.css';
import $ from 'jquery';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';

const Results = ({ servicesResult, contractResult }) => {
  if (servicesResult.length > 0 || contractResult.length > 0) {
    return (
      <div
        className="col-12  rounded cream position-absolute top-100 d-flex flex-column align-items-center mt-1"
        style={{ zIndex: '9999', height: '300px', overflow: 'auto' }}
      >
        {contractResult.map((el) => {
          return <div className="col-12 border-top sResult shadow-sm border-top-info p-2 rounded pointer">{el['h1']}</div>;
        })}
        {servicesResult.map((el) => {
          return <div className="col-12 border-top sResult shadow-sm border-top-info p-2 rounded pointer">{el['h1']}</div>;
        })}
      </div>
    );
  }
  return null;
};
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [contractsearchResults, setContractSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {

      servicesList.forEach((el) => {
        if (searchTerm.length >= 3) {
          if (el['h1Content'].includes(searchTerm) || el['h2Content'].includes(searchTerm)) {
            console.log(searchResults);
            if (!searchResults.includes(el)) {
              el.type = 'service';
              setSearchResults((prev) => [...prev, el]);
            }
          }
        }
      });
    }
  }, [searchTerm]);
  useEffect(() => {
    if (searchTerm) {

      previewContracts.forEach((el) => {
        if (searchTerm.length >= 3) {
          if (el.categoryHeb.includes(searchTerm) || el.h1.includes(searchTerm) || el.h1Content.includes(searchTerm)) {
            console.log('contractsearchResults', contractsearchResults);
            if (!contractsearchResults.includes(el)) {
              el.type = 'contract';
              setContractSearchResults((prev) => [...prev, el]);
            }
          }
        }
      });
    }
  }, [searchTerm]);

  const resetSearch = (e) => {
    if (e.key === 'Backspace') {
      setSearchResults([]);
      setContractSearchResults([])
    }
  };
  return (
    <div
      className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none d-none  d-flex align-self-center position-relative border border-dark py-2 rounded rounded-2"
      style={{ maxHeight: '65px' }}
    >
      <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
      <input className="col f18 customSearchBar p-3" onKeyDown={resetSearch} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="חפש.." />
      <Results contractResult={contractsearchResults} servicesResult={searchResults} />
    </div>
  );
};

export default Search;
