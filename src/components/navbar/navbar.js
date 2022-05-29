import "./navbar.css";
import $ from "jquery";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const [currentButton,setCurrentButton] = useState(null);
  useEffect(() => {
    let elem = document.querySelectorAll(".myItem");

    elem.forEach((el) => {
      el.addEventListener("mouseenter", (e) => {
        let btn = e.target.querySelector("a");
        let list = e.target.querySelector(".dropdown-menu");
        window.$(btn).dropdown("show");
        elem.forEach((el,idx)=>{
          let compareBtn = el.querySelector("a");
        let compareList = el.querySelector(".dropdown-menu");
          if(compareBtn.id !== btn.id){
            compareList.classList.remove("show")
            $(btn).attr('aria-expanded', false);
          }
        })
        
      });
      el.addEventListener("click", (e) => {
        let splitted = e.target.href.split("/");
        splitted = splitted[splitted.length - 1];
        window.location.pathname = splitted;
      });

    });
    $("body").on("click",(e)=>{
      let elem = document.querySelectorAll(".navDropMenu");
      elem.forEach((el)=>{
        el.classList.remove("show")
      })

    })
    $(function(){
      $(function($) {
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('.navItemCustom').each(function() {
         if (this.href === path) {
          $(this).addClass('active');
         }
        });
       });
  })
    return () => {
      elem.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("click", () => {});
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
            <a class="dropdown-item" href="#">
              עורך דין חוזים
            </a>
            <a class="dropdown-item" href="#">
              Aonעורך דין חוזים
              Aonעורך דין חוזים
            </a>
            <a class="dropdown-item" href="#">
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
            <a class="dropdown-item" href="#">
              הסכמים לדוגמא
            </a>
            <a class="dropdown-item" href="#">
              Another הסכמים לדוגמא
            </a>
            <a class="dropdown-item" href="#">
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
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
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
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
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
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
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
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
