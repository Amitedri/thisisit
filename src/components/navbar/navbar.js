import './navbar.css';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import Search from '../Search';
const Navbar = () => {
  useEffect(() => {
    let elem = document.querySelectorAll('.myItem');
    $(elem)
      .on('mouseenter', function (e) {
        $(this).find('.navDropMenu').show();
      })
      .on('mouseleave', function (e) {
        $(this).find('.navDropMenu').hide();
      });
    elem.forEach((el) => {
      el.addEventListener('click', (e) => {
        let splitted = e.target.href.split('/');
        splitted = splitted[splitted.length - 1];
        window.location.pathname = splitted;
      });
    });


    $(function () {
      $(function ($) {
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('.navItemCustom').each(function () {
          if (this.href === path) {
            $(this).addClass('active');
          }
        });
      });
    });
    
    return () => {
      elem.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('click', () => {});
      });
    };
  }, []);
  const showMobileMenu = ()=>{
    let elem = document.querySelector(".mobileMenu");
    if(elem.classList.contains("d-none")){
      elem.classList.remove("d-none")
      return
    }
    if(!elem.classList.contains("d-none")){
      elem.classList.add("d-none")
      return
    }
  }
  return (
    <div className="container-fluid blue d-flex flex-row justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-start justify-content-sm-start justify-content-start sticky-top ">
      {/* Menu icon */}
      <img src="../assets/icons/burgerMenu.svg" onClick={showMobileMenu} className="align-self-center bbbmenu align-self-end pointer" height="35" width="35" />
      <div className='col-6 bg-light position-absolute end-0 mobileMenu d-none d-flex flex-column justify-content-start mobileContainer'>
      <div
      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-10 d-flex align-self-center position-relative py-2"
      style={{ height: '65px' }}
    >
      <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
      <input className="form-control p-3" type="text" placeholder="חפש.." />
    </div>
        <ul className=''>
          <li className='mobileitem col-12 border-bottom p-2 text-center'> <a
            id="contractLawyer"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/"
          >
            עורך דין חוזים
          </a></li>
          <li className=' mobileitem col-12 border-bottom p-2 text-center'>          <a
            id="exampleContracts"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/contracts"
          >
            הסכמים לדוגמא
          </a></li>
          <li className=' mobileitem col-12 border-bottom p-2 text-center'>          <a
            id="officeServices"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/services"
          >
            שירותי המשרד
          </a></li>
          <li className=' mobileitem col-12 border-bottom p-2 text-center'>          <a
            id="legalInfo"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/legal"
          >
            מידע משפטי
          </a></li>
          <li className=' mobileitem col-12 border-bottom p-2 text-center'>          <a
            id="forCommunity"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/community"
          >
            למען הקהילה
          </a></li>
          <li className=' mobileitem col-12 border-bottom p-2 text-center'>          <a
            id="contact"
            as="button"
            className="navmobileitem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/contactus"
          >
            צור קשר
          </a></li>
        </ul>
      </div>
      {/* Navigation */}
      <div className="col navbarCustom f22 d-flex flex-row justify-content-center ">
        <div className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3 dropdown">
          <a
            id="contractLawyer"
            as="button"
            className=" navItemCustom text-white costumeItem "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/"
          >
            עורך דין חוזים
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="contractLawyer">
            <a class="dropdown-item dropitop" href="#">
              עורך דין חוזים
            </a>
            <a class="dropdown-item dropitop" href="#">
              Aonעורך דין חוזים Aonעורך דין חוזים
            </a>
            <a class="dropdown-item dropitop" href="#">
              ם
            </a>
          </div>
        </div>
        <span className="pe-2 ps-3 pb-2 align-self-center pointer myItem m-3">
          <a
            id="exampleContracts"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/contracts"
          >
            הסכמים לדוגמא
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="exampleContracts">
            <a class="dropdown-item dropitop" href="#">
              הסכמים לדוגמא
            </a>
            <a class="dropdown-item dropitop" href="#">
              Another הסכמים לדוגמא
            </a>
            <a class="dropdown-item dropitop" href="#">
              הסכמים לדוגמא
            </a>
          </div>
        </span>
        <span className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3">
          <a
            id="officeServices"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/services"
          >
            שירותי המשרד
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="officeServices">
            <a class="dropdown-item dropitop" href="#">
              Action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Another action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Something else here
            </a>
          </div>
        </span>
        <span className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3">
          <a
            id="legalInfo"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/legal"
          >
            מידע משפטי
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="legalInfo">
            <a class="dropdown-item dropitop" href="#">
              Action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Another action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Something else here
            </a>
          </div>
        </span>
        <span className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3">
          <a
            id="forCommunity"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/community"
          >
            למען הקהילה
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="forCommunity">
            <a class="dropdown-item dropitop" href="#">
              Action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Another action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Something else here
            </a>
          </div>
        </span>
        <span className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3">
          <a
            id="contact"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/contactus"
          >
            צור קשר
          </a>
          <div class="dropdown-menu navDropMenu" aria-labelledby="contact">
            <a class="dropdown-item dropitop" href="#">
              Action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Another action
            </a>
            <a class="dropdown-item dropitop" href="#">
              Something else here
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
