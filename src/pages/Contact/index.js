import "./Contact.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import TextComponent from "../../components/TextComponent";

import { allProdcts, allServices } from "../../sampleData";
import FAQ from "../../components/FAQ";
import { useState } from "react";

const Contact = () => {
  const textComponentData = {
    text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עדול, צוט ומעיוט - לפתיעם גולר מונפררקל אס לכימפו, דול, צוט ומעיוט - לפתיעם",
    header: "ומעיוט - לפתיעם גולר מונפדררקל אס לכימפו",
    subHeader: "ומעיוט - לפתיעם גולר מונפררקל אס לכימפו. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };
  const textComponentData2 = {
    text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עדול, צוט ומעיוט - לפתיעם גולר מונפררקל אס לכימפו, דולגדלךכחלדךגחכךלדג, צוט ומעיוט - לפתיעם",
    header: "ומעיוט - לפתיcxxעם גולר מונפררקל אס לכימפו",
    subHeader: "ומעיוט - לפתיעם גולר מונפררקל אס לכימפו. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      <TextComponent header={textComponentData.header} imgSrc={textComponentData.imgSrc} subHeader={textComponentData.subHeader} text={textComponentData.text} key={textComponentData.header} backgroundColor="#4ba492"/>
      
      <ContactsUs key={"sdnjnnnnn"} />
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdhasdasdhhh" />
      <ProductSlider componentHeader={"מקרקעין"} dataToRender={allServices} key="sdsdsadhhhh" />
    </div>
  );
};

export default Contact;
