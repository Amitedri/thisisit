import ContactsUs from "../../components/ContactUs";
import ContractSteps from "../../components/ContractSteps";
import FAQ from "../../components/FAQ";
import ProductSlider from "../../components/ProductSlider";
import "./ContractLawyer.css";
import { allProdcts, allServices } from "../../sampleData";
import TextComponent from "../../components/TextComponent";
import Footer from "../../components/Footer";
import {general} from '../../Data/Questions'
import servicesList from "../../Data/Services";

const ContractLawyer = () => {
const generalServices= servicesList.filter((el)=>el.categoryHeb === "כללי")
  const textComponentData = {
    text: `הסכמים וחוזים מלווים וממלאים את חיינו. 
    לפעמים הם קצרים, נעימים או לא חשובים כמו לקבוע לקפה עם חברים, 
    ולפעמים ארוכים ובעלי ערך רב כגון חוזה לקניית דירה ו/או הסכם ממון. 
    בכל סוגי החוזים והסכמים ישנה תקשורת העונה להגדרות של הצעה וקיבול. 
    הצד המציע יפרט את תנאיו ודרישותיו בהצעתו, ואילו המקבל 
    ישקול האם עליו לקבל את ההצעה כפי שהיא או לאחר שינוי. 
    אקט של הצעה ו/או קיבול ההסכם ניתן לבצע בעל פה, בכתב, בהתנהגות או במעשה. 
    החוזה ו/או ההסכם יהא מחייב בכפוף למבחני גמירות דעת ומסוימות (מלבד בעסקאות והסכמים בנושאי מקרקעין שם יש דרישת כתב להסכמים). 
    בבואי לנסח ו/או לערוך הסכם מטרתי היא לצפות פני עתיד, 
    ולוודא כי הצדדים לחוזה לא יצטרכו לפתוח ולעיין בו יותר החל מיום חתימתו. 
    אשמח לפרט לכם מספר כללי אצבע לניסוח ו/או עריכת חוזים הסכמים במאמר מטה.
    `,
    header: "חשיבותו של עורך דין חוזים",
    subHeader: "חשיבותו של עורך דין חוזים. סאב כותרת",
    imgSrc: "../assets/img/personImg.svg",
  };

  return (
    <div className="col-10 d-flex flex-column align-items-center p-0 green m-auto">
      <TextComponent {...textComponentData} />
      {/* contract steps */}
      <div className="col-12 d-flex flex-column align-items-center cream mt-4">
        <h1 className="f42 w3 p-3">כותרת שקשורה לפה</h1>
      </div>
      <ContractSteps />
      <ProductSlider componentHeader={"הסכמים לדוגמא"} dataToRender={generalServices} />
      <ContactsUs key={"dskdmasmkdmalksdmdkl"} />
      <FAQ  header={"שאלות ותשובות"} withTitle="true" questions={general}/>
      <ProductSlider componentHeader={"שירותים לדוגמא"} dataToRender={generalServices} />
    </div>
  );
};

export default ContractLawyer;
