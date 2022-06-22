import ContactsUs from '../../components/ContactUs';
import ContractSteps from '../../components/ContractSteps';
import FAQ from '../../components/FAQ';
import ProductSlider from '../../components/ProductSlider';
import './ContractLawyer.css';
import { allProdcts, allServices } from '../../sampleData';
import Footer from '../../components/Footer';
import { lawyer } from '../../Data/Questions';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';
const SpecialTextComponent = ({ imgSrc, header, subHeader, text, backgroundColor, textHeaderColor, textColor }) => {
  return (
    <div className="col-12 d-flex flex-row flex-wrap rounded pb-3 pt-3" style={{ backgroundColor: backgroundColor, color: textHeaderColor }}>
      {/* side rounded image */}
      <div className="col d-flex justify-content-center">
        <img src={imgSrc} className="p-3 rounded-circle card-img" style={{maxHeight:"600px",maxWidth:"600px"}} />
      </div>
      {/* text container */}
      <div className="col-7 d-flex flex-column align-items-start mt-5">
        <h1 className="m-0 p-0 f32 text-right">{header}</h1>
        <span className="m-0 p-0 fw-2 text-right w-75 mt-2 text-right">{text}</span>
        <div className="col-12 d-flex justify-content-start flex-row align-items-start  align-self-center mt-2" >
          <div className="btn yellow hoverScale col-3 m-2 shadow-sm">
          <a href="#" style={{all:"unset"}}>
             צרו קשר כעת <img src="../assets/icons/phoneWhite.svg" height="20" width="20" />
            </a>

          </div>
          <div className="btn yellow hoverScale col-3 m-2 shadow-sm">
            <a href="#" style={{all:"unset"}}>
              שלחו הודעה בוואצאפ <img src="../assets/icons/whatsappWhite.svg" height="20" width="20" />
            </a>
          </div>
        </div>
        <h1 className="m-0 p-0 lightBlueText f32 text-right mt-2">משרד עורך דין חוזים דיגיטלי</h1>
        <h3 className="m-0 p-0   mt-2 m-2 f26 greyText">משרדנו מציע שירות משפטי דיגיטלי חדש, מהיר ומקצועי <br/> שבו תוכלו לרכוש ישירות מהאתר:</h3>
        <div className='d-flex flex-column justify-content-start'>
          <ul className='d-flex flex-column justify-content-start align-self-start '>
            <li className='greyText f22' style={{listStyleType: "decimal"}}>חוזה מקיף של משרדנו בקובץ Word במהירות על ידי מספר קליקים.</li>
            <li className='greyText f22' style={{listStyleType: "decimal"}}>חוזה מקיף + התאמה אישית בת 30 דקות תוך 48 שעות. </li>
            <li className='greyText f22' style={{listStyleType: "decimal"}}>פגישת ייעוץ אישית בת 90 דקות להגנה מיטבית.</li>
          </ul>
          <p className='f22 w-75 text-right align-self-start greyText'>תוכלו למצוא באתר עשרות דוגמאות לחוזים בכל תחום משפטי שנערכו ונוסחו על ידי עורך דין חוזים אלעד כהן</p>
          <div className="col-12 d-flex justify-content-start flex-row align-items-start  align-self-start" >
          <div className="btn lightBlue hoverGreen text-white  col-3 m-1  shadow-sm ">
          <a href="#" style={{all:"unset"}}>
          חוזים מקרקעין
            </a>

          </div>
          <div className="btn lightBlue hoverGreen text-white  col-3 m-1  shadow-sm ">
            <a href="#" style={{all:"unset"}}>
            חוזים חברות
            </a>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-start flex-row align-items-start  align-self-start" >
          <div className="btn lightBlue hoverGreen text-white  col-3 m-1  shadow-sm ">

          <a href="#" style={{all:"unset"}}>
          חוזים משפחה
            </a>

          </div>
          <div className="btn lightBlue hoverGreen text-white  col-3 m-1  shadow-sm ">
            <a href="#" style={{all:"unset"}}>
            חוזים כללי
            </a>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};
const ContractLawyer = () => {
  const generalServices = servicesList.filter((el) => el.categoryHeb === 'כללי');
  const generalContracts = previewContracts.filter((el) => (el.categoryHeb = 'כללי'));
  console.log('generalContracts', generalContracts);
  const textComponentData = {
    text: `חוזים מלווים וממלאים את חיינו. 
    לפעמים הם קצרים ופחות חשובים כמו הסכמה להצטרף למועדון לקוחות בסופרמרקט, 
    ולפעמים הם ארוכים ובעלי ערך רב כגון חוזה לקניית דירה או הסכם ממון בין בני זוג. 
    בבואי לנסח חוזה מטרתי היא לצפות פני עתיד ולוודא כי הצדדים לחוזה לא יותירו שאלות פתוחות ללא מענה ולא יצטרכו לשוב ולהתדיין לגבי החוזה החל מיום חתימתו.`,
    header: 'עורך דין חוזים',
    subHeader: 'חשיבותו של עורך דין חוזים. סאב כותרת',
    imgSrc: '../assets/img/עורך דין חוזים.jpg',
  };

  return (
    <div className="col-10 d-flex flex-column align-items-center p-0 green m-auto">
      <SpecialTextComponent {...textComponentData} />
      {/* contract steps */}
      <div className="col-12 d-flex flex-column align-items-center cream mt-4">
        <h1 className="f42 w3 p-3">כללים לניסוח חוזים
        </h1>
      </div>
      <ContractSteps />
      <ProductSlider componentHeader={'הסכמים לדוגמא'} dataToRender={generalContracts} />
      <ContactsUs key={'dskdmasmkdmalksdmdkl'} />
      <FAQ header={'שאלות ותשובות'} withTitle="true" questions={lawyer} />
      <ProductSlider componentHeader={'שירותים לדוגמא'} dataToRender={generalServices} />
    </div>
  );
};

export default ContractLawyer;
