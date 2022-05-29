import './ProductPage.css';
import ContactsUs from '../../components/ContactUs';
import ProductSlider from '../../components/ProductSlider';
import ContractPreview from '../../components/ContractPreview';
import StandUp from '../../components/StandUp';
import FAQ from '../../components/FAQ';
import servicesList from '../../Data/Services';
import { general } from '../../Data/Questions';

const ProductPage = () => {
  const generalServices = servicesList.filter((el) => el.categoryHeb === 'כללי');

  const imgSrc = '../assets/img/service.png';
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center p-0 overflow-hidden">
      {/* large image with button */}
      <div className="row p-0 d-flex flex-row">
        <div className="col d-flex flex-column text-center bg-white border-bottom p-0">
          <h1 className="f42 text-white mt-3 lightBlueText">תקציר הסכם ידועים בציבור</h1>
          <h2 className="f18 ps-2 pe-2 greyText">תניית פטור ו/או הצהרת אי אחריות (Disclaimer)</h2>
          <p className="ps-5 pe-5">
            אין לעשות כל שימוש בהסכם מכר המפורט מטה! המידע מטה מסופק ע"י משרד ce&co לידע כללי על תחומי העיסוק של
            המשרד ואינו מחליף ו/או מהווה ייעוץ עורך דין מקרקעין ו/או עורך דין נדל"ן ו/או הסכם מכר ו/או משפטי ו/או מקצועי כנדרש. הסכם מכר המפורט מטה ו/או חוזה
            מכר אחר הינו הסכם מכר קצר שאינו ממצה ו/או מכיל את מלוא הזכויות ו/או החובות ו/או ההגנות הנדרשות ממוכר דירה ו/או קונה דירה בבואם להתקשר חוזית זה עם זה
            ולכן פסול לשימוש. כל העושה בו שימוש עושה זאת על אחריותו המלאה תוך ידיעה ברורה כי הוא מסתכן ופוגע בזכויותיו והגנותיו. יצויין, כי בכל התקשרות חוזית יש
            לבדוק את הנסיבות והעובדות ולהתאים עבורן חוזה מכר בעל תוכן ספציפי וממוקד. יובהר כי משרד ce&co לא יהא אחראי כלפי אף אדם ו/או גוף המסתמך בכל צורה ו/או
            דרך על הסכם מכר ו/או במידע המוצג מטה. צרו קשר כעת עם משרד ce&co הכולל בתוכו עורכי דין המתמחים במקרקעין ו/או נדל"ן ונערוך עבורכם הסכם מכר מקיף המתאים
            לעובדות והנסיבות הספציפיות שלכם. באפשרותכם לרכוש הסכם מכר מקיף און ליין באתר, <a href='#'>לחצו כאן </a>.{' '}
          </p>
          <div className="d-grid">
            <a className="btn rounded-0 lightBlue text-white">טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט </a>
          <div className="d-grid d-flex flex-row">
          <a className="btn yellow w-50 rounded-0 border-start">הסכם + התאמה אישית 275 ₪</a>
          <a className="btn yellowLight w-50 rounded-0">רכוש הסכם מקיף 69.90 ₪</a>
          </div>

          </div>
        </div>
        <img src={imgSrc} className="col-6 p-0 rounded" />
      </div>
      <ContractPreview key={'asdasaasdsddasdasdsa'} />
      <StandUp key={'asdasadasdasdsfffa'} />
      <FAQ header={'שאלות ותשובות בנושא משפחה'} withTitle="true" questions={general} />
      <ContactsUs key={'sdnjnnnnn'} />
    </div>
  );
};

export default ProductPage;
