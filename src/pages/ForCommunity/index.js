import "./ForCommunity.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import TextComponent from "../../components/TextComponent";

import { allProdcts, allServices } from "../../sampleData";
import FAQ from "../../components/FAQ";
import { useState } from "react";

const ForCommunity = () => {
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
      <TextComponent header={textComponentData.header} imgSrc={textComponentData.imgSrc} subHeader={textComponentData.subHeader} text={textComponentData.text} key={textComponentData.header} backgroundColor="#fdfdf1"/>
      {/* <TextComponent header={textComponentData2.header} imgSrc={textComponentData2.imgSrc} subHeader={textComponentData2.subHeader} text={textComponentData2.text} key={textComponentData2.header}/> */}
      
      <ContactsUs key={"sdnjnnnnn"} />
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={allServices} key="sdsdhasdasdhhh" className="pt-4"/>
      <ProductSlider componentHeader={"הסכמים לדוגמא"} dataToRender={allServices} key="sdsdsadhhhh" className="pt-4"/>
    </div>
  );
};

export default ForCommunity;
