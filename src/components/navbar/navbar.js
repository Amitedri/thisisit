import "./navbar.css";
import $ from "jquery";
import { useEffect, useRef } from "react";
const Navbar = () => {

  useEffect(()=>{
    let elem = document.querySelectorAll(".navItemCustom");

    // elem.forEach((el)=>{
    //   el.addEventListener("mouseenter",(e)=>{
    //     let innerElem =  e.target.querySelector(".dropdown-menu")
    //     console.log(e.target)
    //     innerElem.style.display = "block"
    //   })
    //   el.addEventListener("mouseout",(e)=>{
    //     let innerElem =  e.target.querySelector(".dropdown-menu")
    //     console.log(e.target)
    //     innerElem.style.display = "block"
    //   })
    // })
    
  },[])
  return (
    <div className="container-fluid blue d-flex flex-row justify-content-center sticky-top">
      {/* Menu icon */}
      <img src="./assets/icons/burgerMenu.svg" className="align-self-center d-none" height="35" width="35" />
      {/* Navigation */}
      <div className="col navbarCustom f22 d-flex flex-row justify-content-center ">
        <div className="p-4 align-self-center navItemCustom pointer dropdown">
          <a id="contractLawyer" as="button" className="dropdown-toggle text-white costumeItem " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
            עורך דין חוזים
          </a>
          <div class="dropdown-menu" aria-labelledby="contractLawyer">
            <a class="dropdown-item" href="#">
              עורך דין חוזים
            </a>
            <a class="dropdown-item" href="#">
              Another actionעורך דין חוזים
            </a>
            <a class="dropdown-item" href="#">
              Something else hereעורך דין חוזים
            </a>
          </div>
        </div>
        <span className="p-4 align-self-center navItemCustom pointer">
          <a id="exampleContracts" as="button" className="dropdown-toggle text-white costumeItem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/contracts">
            הסכמים לדוגמא
          </a>
          <div class="dropdown-menu" aria-labelledby="exampleContracts">
            <a class="dropdown-item" href="#">
              הסכמים לדוגמא
            </a>
            <a class="dropdown-item" href="#">
              Another הסכמים לדוגמא
            </a>
            <a class="dropdown-item" href="#">
              Something else here הסכמים לדוגמא
            </a>
          </div>
        </span>
        <span className="p-4 align-self-center navItemCustom pointer">
          <a id="officeServices" as="button" className="dropdown-toggle text-white costumeItem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/services">
            שירותי המשרד
          </a>
          <div class="dropdown-menu" aria-labelledby="officeServices">
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
        <span className="p-4 align-self-center navItemCustom pointer">
          <a id="legalInfo" as="button" className="dropdown-toggle text-white costumeItem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/legal">
            מידע משפטי
          </a>
          <div class="dropdown-menu" aria-labelledby="legalInfo">
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
        <span className="p-4 align-self-center navItemCustom pointer">
          <a id="forCommunity" as="button" className="dropdown-toggle text-white costumeItem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/community" >
            למען הקהילה
          </a>
          <div class="dropdown-menu" aria-labelledby="forCommunity">
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
        <span className="p-4 align-self-center navItemCustom pointer">
          <a id="contact" as="button" className="dropdown-toggle text-white costumeItem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            צור קשר
          </a>
          <div class="dropdown-menu" aria-labelledby="contact">
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
