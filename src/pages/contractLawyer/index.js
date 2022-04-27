import ContactsUs from "../../components/ContactUs";
import ContractSteps from "../../components/ContractSteps";
import FAQ from "../../components/FAQ";
import ProductSlider from "../../components/ProductSlider";
import "./ContractLawyer.css";
import { allProdcts, allServices } from "../../sampleData";
import TextComponent from "../../components/TextComponent";
const ContractLawyer = () => {

  const textComponentData = {
    text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם",
    header: "חשיבותו של עורך דין חוזים",
    subHeader: "חשיבותו של עורך דין חוזים. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };

  return (
    <div className="row d-flex flex-column align-items-center p-0 green">
      <TextComponent {...textComponentData} />
      {/* contract steps */}
      <ContractSteps />
      <ContactsUs key={"dskdmasmkdmalksdmdkl"} />
      <FAQ  header={"שאלות ותשובות"}/>
      <ProductSlider componentHeader={"הסכמים לדוגמא"} dataToRender={allProdcts} />
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={allServices} />

      <div className="col-12">example services</div>
    </div>
  );
};

export default ContractLawyer;
