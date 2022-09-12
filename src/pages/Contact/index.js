import "./Contact.css";
import ContactsUs from "../../components/ContactUs";
import ProductSlider from "../../components/ProductSlider";
import TextComponent from "../../components/TextComponent";

const Contact = ({previewContracts,servicesList}) => {


  const textComponentData = {
    text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושהתידם הכייר וק קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עדול, צוט ומעיוט - לפתיעם גולר מונפררקל אס לכימפו, דול, צוט ומעיוט - לפתיעם",
    header: "כותרת",
    subHeader: "ומעיוט - לפתיעם גולר מונפררקל אס לכימפו. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto d-flex flex-column align-items-center">
      <TextComponent header={textComponentData.header} imgSrc={textComponentData.imgSrc} subHeader={textComponentData.subHeader} text={textComponentData.text} key={textComponentData.header} backgroundColor=""/>   
      <ContactsUs key={"sdnjnnnnn"} />
      <ProductSlider componentHeader={"הסכמים לדוגמא"} dataToRender={previewContracts} key="sdsdhasdasdhhh" />
      <ProductSlider componentHeader={"שירותי המשרד"} dataToRender={servicesList} key="sdsdsadhhhh" type='contract' />
    </div>
  );
};

export default Contact;
