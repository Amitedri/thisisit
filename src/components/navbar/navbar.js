import './navbar.css';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import Search from '../Search';
import Cart from '../Cart';
const Navbar = () => {
  const [showCart,setShowCart] = useState(false)
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
  const showMobileMenu = () => {
    let elem = document.querySelector('.mobileMenu');
    if (elem.classList.contains('d-none')) {
      elem.classList.remove('d-none');
      return;
    }
    if (!elem.classList.contains('d-none')) {
      elem.classList.add('d-none');
      return;
    }
  };

  const showCartFunc = ()=>{
    setShowCart((prev)=>!prev)
  }
  return (
    <div className="container-fluid shadow-sm blue d-flex flex-row justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-between justify-content-sm-between justify-content-between sticky-top ">
      {/* Menu icon */}
      <img src="../assets/icons/burgerMenu.svg" onClick={showMobileMenu} className="align-self-center bbbmenu align-self-end pointer" height="35" width="35" />
      <div className="col-sm-6 col-10 bg-light position-absolute end-0 mobileMenu d-none d-flex flex-column justify-content-start mobileContainer">
        <h3 className="f22 align-self-center mt-2 greyText shadow-sm">ELAD COHEN & CO</h3>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10 d-xxl-flex d-xl-flex d-lg-flex d-md-flex  d-flex align-self-center position-relative py-2">
          <i className="fa fa-duotone fa-magnifying-glass  searchIcon fa-2x align-self-center m-2" id="searchIcon"></i>
          <input className="form-control p-3" type="text" placeholder="חפש.." />
        </div>
        <ul className="">
          <li className="mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="contractLawyer" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
              עורך דין חוזים
            </a>
          </li>
          <li className=" mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="exampleContracts" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/contracts">
              הסכמים לדוגמא
            </a>
          </li>
          <li className=" mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="officeServices" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/services">
              שירותי המשרד
            </a>
          </li>
          <li className=" mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="legalInfo" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/legal">
              מידע משפטי
            </a>
          </li>
          <li className=" mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="forCommunity" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/community">
              למען הקהילה
            </a>
          </li>
          <li className=" mobileitem col-12 border-bottom p-2 text-center">
            {' '}
            <a id="contact" as="button" className="navmobileitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/contactus">
              צור קשר
            </a>
          </li>
        </ul>
      </div>
    <Cart openCart={showCart} setOpenCart={showCartFunc}/>

      {/* Navigation */}
      <div className="col navbarCustom f22 d-flex flex-row justify-content-center ">
        <div className="pe-2 ps-3 pb-2 align-self-center  pointer myItem m-3 dropdown">
          <a
            id="contractLawyer"
            as="button"
            className=" navItemCustom text-white costumeItem"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="/"
          >
            עורך דין חוזים
          </a>
          <div class="dropdown-menu  navDropMenu " aria-labelledby="contractLawyer">
            <a class="dropdown-item dropitop" href="#">
              כללים לניסוח חוזה
            </a>
            <a class="dropdown-item dropitop" href="#">
             הסכמים לדוגמא
            </a>
            <a class="dropdown-item dropitop" href="#">
              שאלות ותשובות
            </a>
            <a class="dropdown-item dropitop" href="#">
             שירותי המשרד
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
              הסכמי מקרקעין
            </a>
            <a class="dropdown-item dropitop" href="#">
              הסכמי משפחה
            </a>
            <a class="dropdown-item dropitop" href="#">
              הסכמי חברות וסטארט-אפ
            </a>
            <a class="dropdown-item dropitop" href="#">
              הסכמי עבודה
            </a>
            <a class="dropdown-item dropitop" href="#">
              הסכמים כלליים
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
              דיני חברות
            </a>
            <a class="dropdown-item dropitop" href="#">
              דיני משפחה
            </a>
            <a class="dropdown-item dropitop" href="#">
              דיני מקרקעין
            </a>

            <a class="dropdown-item dropitop" href="#">
              שירותים כלליים
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
              דיני חברות
            </a>
            <a class="dropdown-item dropitop" href="#">
              דיני משפחה
            </a>
            <a class="dropdown-item dropitop" href="#">
              דיני מקרקעין
            </a>
            <a class="dropdown-item dropitop" href="#">
              דיני עבודה
            </a>
            <a class="dropdown-item dropitop" href="#">
              נושאים כלליים
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
              קידום הגדרת ידועים בציבור
            </a>
            <a class="dropdown-item dropitop" href="#">
              עזרה בפנייה למוסדות רפואה במצב חרום
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
          {/* <div class="dropdown-menu navDropMenu" aria-labelledby="contact">

          </div> */}
        </span>
      </div>
      <div className="col-1 d-flex flex-row justify-content-center align-items-center position-relative pointer" onClick={showCartFunc}>
        <span
          className="fw-bold text-white m-1 position-absolute lightBlue rounded-circle text-center start-50 f14"
          style={{ height: '25px', width: '25px', lineHeight: '25px' }}
        >
          0
        </span>
        <img src="../assets/icons/cart.svg" className='cartImg' height="50" width="50"  />
      </div>
    </div>
  );
};

export default Navbar;
