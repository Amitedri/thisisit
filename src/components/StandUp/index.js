import './StandUp.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import PriceTable from '../PriceTable';
const buttons = [
  {
    header: 'הסכם',
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
    ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
    נובש ערששף. זותה מנק הבקיץ אפאח דלאמת`,
    buttonText: 'רכישה',
    withBorder: true,
  },
  {
    header: 'שירות',
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
    ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
    נובש ערששף. זותה מנק הבקיץ אפאח דלאמת`,
    buttonText: 'רכישה',
    withBorder: false,
  },
];
// const PurchaseBox = ({ header, text, buttonText, withBorder }) => {
//   return (
//     <div className={`col-6 p-0 d-flex flex-column align-items-center rounded text-center mt-3 ${withBorder ? 'standupBorder' : 'emptyLol'}`}>
//       {/* header */}
//       <h1 className="f30 w3 col-6">{header}</h1>
//       <hr className="w-25 p-0 m-0 mb-3" />
//       <p className="f16 w2 col-8 p-3">{text}</p>
//       <div className="d-grid col-5">
//         <a class="btn btn-lg yellow letter2 w3 blueText" type="button">
//           {buttonText}
//         </a>
//       </div>
//     </div>
//   );
// };

const StandUp = () => {
  const sentences = ['משרדנו מתמחה בכל סוגי ההסכמים.', 'הגנו על זכויותיכם בצורה מיטבית', ' הסכם מקיף או חבילת התאמה אישית'];
  const [current, setCurrent] = useState('');
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    const doit = () => {
      setTimeout(() => {
        if(counter < sentences.length - 1){
          setcounter((prev) => prev + 1);
        }
        else{
          setcounter(0)
        }
        console.log(counter)
      }, 2000);
    };
    doit()

  }, [counter]);

  return (
    <div className="col-12 cream d-flex flex-column flex-wrap align-items-center responsiveContainer p-0 rounded">
      {/* standup header */}
      <div className="col-12 p-0 lightBlue d-flex flex-row align-items-center p-0 headerContainer rounded">
        <h1 className="m-auto specialStandHeader p-0 yellowText text-center">{sentences[counter]}</h1>
      </div>
      {/* Content */}
      <div className="col-12 p-0 d-flex flex-row flex-wrap align-items-center rounded text-center">
        <PriceTable iconType="payment"/>
      </div>
    </div>
  );
};

export default StandUp;
