import './navbar.css';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import Search from '../Search';
import Cart from '../Cart';
import { setShowCart } from '../../Slice';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = ({ setPurchaseData }) => {
  const products = useSelector((state) => state.prods.products);
  const showCart = useSelector((state) => state.prods.showCart);

  const disptach = useDispatch();
  console.log(products);

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

  const showCartFunc = () => {
    disptach(setShowCart(!showCart));
  };
  return (
    <div className="container-fluid shadow-sm blue d-flex flex-row justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-between justify-content-sm-between justify-content-between sticky-top ">
      {/* Menu icon */}
      <img src="../assets/icons/burgerMenu.svg" onClick={showMobileMenu} className="align-self-center bbbmenu align-self-end pointer" height="35" width="35" />
      <div className="col-sm-6 col-10 bg-light position-absolute end-0 mobileMenu d-none d-flex flex-column justify-content-start mobileContainer">
        <h3 className="f22 align-self-center mt-2 greyText">.COHEN ELAD & CO</h3>
        <h3 className="f22 align-self-center greyText">DIGITAL LAW OFFICE</h3>

        <Search
          classlist={'col-sm-10 col-10 d-xxl-flex d-xl-flex d-lg-flex d-md-flex border rounded text-dark d-flex align-self-center position-relative py-2'}
          key="jkahnnsjajksnsjklansjklas"
        />
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
      <Cart openCart={showCart} setOpenCart={showCartFunc} setPurchaseData={setPurchaseData} />

      {/* Navigation */}
      <div className=" col f22 d-xxl-flex d-xl-flex d-lg-flex  d-md-none  d-sm-none d-none flex-row justify-content-center ">
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
            <a class="dropdown-item dropitop" href="/">
              כללים לניסוח חוזה
            </a>
            <a class="dropdown-item dropitop" href="/">
              הסכמים לדוגמא
            </a>
            <a class="dropdown-item dropitop" href="/">
              שאלות ותשובות
            </a>
            <a class="dropdown-item dropitop" href="/">
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
            <a class="dropdown-item dropitop" href="/contracts?cat=מקרקעין" data-incat="מקרקעין">
              הסכמי מקרקעין
            </a>
            <a class="dropdown-item dropitop" href="/contracts?cat=משפחה" data-incat="משפחה">
              הסכמי משפחה
            </a>
            <a class="dropdown-item dropitop" href="/contracts?cat=חברות וסטארט אפ" data-incat="חברות וסטארט אפ">
              הסכמי חברות וסטארט-אפ
            </a>
            <a class="dropdown-item dropitop" href="/contracts?cat=עבודה" data-incat="עבודה">
              הסכמי עבודה
            </a>
            <a class="dropdown-item dropitop" href="/contracts?cat=כללי" data-incat="כללי">
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
            <a class="dropdown-item dropitop" href="/services?cat=חברות וסטארט אפ" data-incat="חברות">
              דיני חברות
            </a>
            <a class="dropdown-item dropitop" href="/services?cat=משפחה" data-incat="משפחה">
              דיני משפחה
            </a>
            <a class="dropdown-item dropitop" href="/services?cat=מקרקעין" data-incat="מקרקעין">
              דיני מקרקעין
            </a>

            <a class="dropdown-item dropitop" href="/services?cat=כללי" data-incat="כללי">
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
            <a class="dropdown-item dropitop" href="/legal?cat=חברות" data-incat="חברות">
              דיני חברות
            </a>
            <a class="dropdown-item dropitop" href="/legal?cat=משפחה" data-incat="משפחה">
              דיני משפחה
            </a>
            <a class="dropdown-item dropitop" href="/legal?cat=מקרקעין" data-incat="מקרקעין">
              דיני מקרקעין
            </a>
            <a class="dropdown-item dropitop" href="/legal?cat=עבודה" data-incat="עבודה">
              דיני עבודה
            </a>
            <a class="dropdown-item dropitop" href="/legal?cat=כללי" data-incat="כללי">
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
            <a class="dropdown-item dropitop" href="/community">
              קידום הגדרת ידועים בציבור
            </a>
            <a class="dropdown-item dropitop" href="/community">
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
        </span>
      </div>
      <div className="col-1 d-flex flex-row justify-content-center align-items-center position-relative pointer" onClick={showCartFunc}>
        <span
          className="fw-bold text-white m-1 position-absolute lightBlue rounded-circle text-center start-50 f14"
          style={{ height: '25px', width: '25px', lineHeight: '25px' }}
        >
          {products.length}
        </span>
        <img src="../assets/icons/cart.svg" className="cartImg" height="50" width="50" />
      </div>
    </div>
  );
};

export default Navbar;
