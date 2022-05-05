import ContactsUs from "../../components/ContactUs";
import ContractSteps from "../../components/ContractSteps";
import FAQ from "../../components/FAQ";
import ProductSlider from "../../components/ProductSlider";
import "./ContractLawyer.css";
import { allProdcts, allServices } from "../../sampleData";
import TextComponent from "../../components/TextComponent";
import Footer from "../../components/Footer";

const ContractLawyer = () => {

  const textComponentData = {
    text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עדול, צוט ומעיוט - לפתיעם גולר מונפררקל אס לכימפו, דול, צוט ומעיוט - לפתיעם",
    header: "חשיבותו של עורך דין חוזים",
    subHeader: "חשיבותו של עורך דין חוזים. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };

  return (
    <div className="col-10 d-flex flex-column align-items-center p-0 green m-auto">
      <TextComponent {...textComponentData} />
      {/* contract steps */}
      <div className="col-12 d-flex flex-column align-items-center cream">
        <h1 className="f42 w3 p-3">כותרת שקשורה לפה</h1>
      </div>
      <ContractSteps />
      <ProductSlider componentHeader={"הסכמים לדוגמא"} dataToRender={allProdcts} />
      <ContactsUs key={"dskdmasmkdmalksdmdkl"} />
      <FAQ  header={"שאלות ותשובות"} withTitle="true"/>
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={allServices} />
      <Footer/>
    </div>
  );
};

export default ContractLawyer;
