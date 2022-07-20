import React, { useEffect, useState } from 'react';
import './Search.css';
import $ from 'jquery';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';

const Results = ({ servicesResult, contractResult }) => {
  if (servicesResult.length > 0 || contractResult.length > 0) {
    return (
      <div
        className="col-12  rounded cream position-absolute top-100 d-flex flex-column align-items-center mt-1 rounded shadow-sm"
        style={{ zIndex: '9999', height: '300px', overflow: 'auto' }}
      >
        {contractResult.map((el) => {
          return (
            <a className="col-12 text-dark border-top sResult   p-2  pointer contract" href={el.href} style={{ textDecoration: 'none' }}>
              {el['h1']}
            </a>
          );
        })}
        {servicesResult.map((el) => {
          return (
            <a className="col-12 text-dark border-top sResult   p-2  pointer service" href={el.href} style={{ textDecoration: 'none' }}>
              {el['h1']}
            </a>
          );
        })}
      </div>
    );
  }
  return null;
};
const Search = ({ classlist }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [contractsearchResults, setContractSearchResults] = useState([]);

  useEffect(() => {
    let res = [];
    if (searchTerm) {
      servicesList.forEach((el) => {
        if (searchTerm.length >= 3) {
          if (el['h1Content'].includes(searchTerm) || el['h2Content'].includes(searchTerm)) {
            console.log(el);
            if (!res.includes(el)) {
              el.type = 'service';
              res.push(el);
            }
          }
        }
      });
      setSearchResults(res);
    }
    console.log(res);
  }, [searchTerm]);
  useEffect(() => {
    let res = [];

    if (searchTerm) {
      previewContracts.forEach((el) => {
        if (searchTerm.length >= 3) {
          if (el.categoryHeb.includes(searchTerm) || el.h1.includes(searchTerm) || el.h1Content.includes(searchTerm)) {
            console.log('contractsearchResults', contractsearchResults);
            if (!res.includes(el)) {
              el.type = 'contract';
              console.log(el);
              res.push(el);
            }
          }
        }
      });
      setContractSearchResults(res);
    }
  }, [searchTerm]);

  const resetSearch = (e) => {
    if (e.key === 'Backspace') {
      setSearchResults([]);
      setContractSearchResults([]);
    }
  };
  return (
    <div className={classlist} style={{ maxHeight: '65px' }}>
      <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
      <input className="col f18 customSearchBar p-3" onKeyDown={resetSearch} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="חפש.." />
      <Results contractResult={contractsearchResults} servicesResult={searchResults} />
    </div>
  );
};

export default Search;
