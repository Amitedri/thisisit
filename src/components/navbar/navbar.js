import './navbar.css';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
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

  return (
    <div className="container-fluid blue d-flex flex-row justify-content-center sticky-top">
      {/* Menu icon */}
      <img src="../assets/icons/burgerMenu.svg" className="align-self-center d-none" height="35" width="35" />
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
