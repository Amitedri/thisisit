import ContactsUs from '../../components/ContactUs';
import ContractSteps from '../../components/ContractSteps';
import FAQ from '../../components/FAQ';
import ProductSlider from '../../components/ProductSlider';
import './ContractLawyer.css';
import { lawyer } from '../../Data/Questions';
import servicesList from '../../Data/Services';
import previewContracts from '../../Data/ContractExport';
const SpecialTextComponent = ({ imgSrc, header, subHeader, text, backgroundColor, textHeaderColor }) => {
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row flex-wrap rounded" style={{ backgroundColor: backgroundColor, color: textHeaderColor }}>

      {/* text container */}
      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-xxl-center justify-content-xl-center justify-content-lg-center align-content-xxl-center align-content-xl-center align-content-lg-center justify-items-xxl-center justify-items-xl-center justify-items-lg-center mt-2">
        <h1 className="m-0 p-0 w5 f32 text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center">{header}</h1>
        <span className="m-0 p-0 fw-2  col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-11 col-11 align-self-center mt-2  text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center f18">{text}</span>
        <div className=" d-flex justify-content-xxl-center justify-content-xl-center align-items-xxl-center align-items-xl-center align-items-center   align-self-center justify-content-sm-center mt-3 col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-12 col-12 flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column ">
          <a href="tel:0508081119" className="btn yellow hoverScale col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-8 m-2  shadow-sm">
            <a  style={{ all: 'unset' }}>
              צרו קשר כעת <img src="../assets/icons/phoneWhite.svg" height="20" width="20" />
            </a>
          </a>
          <a href="https://api.whatsapp.com/send?phone=972508081119" className="btn yellow hoverScale col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-8 m-2  shadow-sm">
            <a  style={{ all: 'unset' }}>
              שלחו הודעה בוואצאפ <img src="../assets/icons/whatsappWhite.svg" height="20" width="20" />
            </a>
          </a>
        </div>
        <h1 className="m-0 p-0 lightBlueText f32 text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center mt-2">משרד עורך דין חוזים דיגיטלי</h1>
        <h3 className="m-0 p-0 text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center  mt-2 m-2 f22 greyText">
          משרדנו מציע שירות משפטי דיגיטלי חדש, מהיר ומקצועי <br /> <a className='lightBlueText fw-bold' style={{textDecoration:"underline"}}>שבו תוכלו לרכוש ישירות מהאתר:</a>
        </h3>
        <div className="col-xxl-12 col-xl-12 col-lg-12 d-flex flex-column justify-content-xxl-center justify-content-xl-center justify-content-lg-center">
          <ul className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 d-flex flex-column text-end justify-content-xxl-center justify-content-xl-center justify-content-center justify-content-lg-center  align-self-center ">
            <li className="f18" style={{ listStyleType: 'decimal' }}>
              חוזה מקיף של משרדנו בקובץ Word במהירות על ידי מספר קליקים.
            </li>
            <li className="f18" style={{ listStyleType: 'decimal' }}>
              חוזה מקיף + התאמה אישית בת 30 דקות תוך 48 שעות.{' '}
            </li>
            <li className="f18" style={{ listStyleType: 'decimal' }}>
              פגישת ייעוץ אישית בת 90 דקות להגנה מיטבית.
            </li>
          </ul>
          <p className="f18 col-8 text-xxl-center text-xl-center text-lg-center text-md-center text-sm-center text-center align-self-xxl-center align-self-xl-center align-self-lg-center align-self-md-center align-self-sm-center align-self-center">
            תוכלו למצוא באתר עשרות דוגמאות לחוזים בכל תחום משפטי שנערכו ונוסחו על ידי עורך דין חוזים אלעד כהן.
          </p>
          <div className="col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-12 col-12 d-flex justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-center flex-row align-items-center align-items-lg-center  align-self-xxl-center align-self-xl-center  align-self-lg-center align-self-md-center align-self-sm-center align-self-center">
            <div className="btn lightBlue hoverGreen text-white  col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-5 col-5 m-1  shadow-sm ">
              <a href="/contracts?cat=מקרקעין" style={{ all: 'unset' }}>
                חוזים מקרקעין
              </a>
            </div>
            <div className="btn lightBlue hoverGreen text-white  col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-5 col-5 m-1  shadow-sm ">
              <a href="/contracts?cat=חברות וסטארט אפ" style={{ all: 'unset' }}>
                חוזים חברות וסטארט אפ
              </a>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-12 col-12 d-flex justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-center flex-row align-items-center align-items-lg-center  align-self-xxl-center align-self-xl-center  align-self-lg-center align-self-md-center align-self-sm-center align-self-center">
            <div className="btn lightBlue hoverGreen text-white  col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-5 col-5 m-1  shadow-sm ">
              <a href="/contracts?cat=משפחה" style={{ all: 'unset' }}>
                חוזים משפחה
              </a>
            </div>
            <div className="btn lightBlue hoverGreen text-white  col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-5 col-5 m-1  shadow-sm ">
              <a href="/contracts?cat=כללי" style={{ all: 'unset' }}>
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
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center p-0 green m-auto">
      <SpecialTextComponent {...textComponentData} />
      {/* contract steps */}
      <div className="col-12 d-flex flex-column align-items-center cream mt-4">
        <h1 className="f42 w3 p-3 m-0">כללים לניסוח חוזים</h1>
      </div>
      <ContractSteps />
      <ProductSlider componentHeader={'הסכמים לדוגמא'} dataToRender={generalContracts} type="contract" />
      <ContactsUs key={'dskdmasmkdmalksdmdkl'} />
      <FAQ header={'שאלות ותשובות'} withTitle="true" questions={lawyer} />
      <ProductSlider componentHeader={'שירותי המשרד'} dataToRender={generalServices} />
    </div>
  );
};

export default ContractLawyer;
