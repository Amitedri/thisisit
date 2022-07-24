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


const StandUp = ({ doc }) => {
  const sentences = [
    { text: 'שירות משפטי דיגיטלי חדש', color: '#4ba492' },
    { color: '#fdfdf1', text: 'רכישת הסכם מקיף או פגישת ייעוץ' },
    { text: 'און ליין ישירות מהאתר', color: '#4ba492' },
    { text: 'להגנה מיטבית על זכויותיכם', color: '#f0cc76' },
  ];
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    let cntarget = document.querySelector('.cntarget');

    const doit = () => {
      setTimeout(() => {
        if (counter < sentences.length - 1) {
          setcounter((prev) => prev + 1);
        } else {
          setcounter(0);
        }
      }, 1000);
    };
    doit();
  }, [counter]);
  useEffect(() => {
    let onurs = document.querySelectorAll('.onurs');

    onurs[counter].classList.remove('empty');
    onurs[counter].classList.add('full');

    onurs.forEach((el, idx) => {
      if (el.id !== onurs[counter].id) {
        el.classList.add('empty');
        el.classList.remove('full');
      }
    });
  }, [counter]);
  return (
    <div className="col-12 cream d-flex flex-column flex-wrap align-items-center responsiveContainer p-0 rounded">
      {/* standup header */}
      <div className="col-12 p-0 blue d-flex flex-row align-items-center p-0 headerContainer rounded ">
        <h2 className="m-auto specialStandHeader p-0 text-center tntarget" style={{ color: sentences[counter].color }}>
          {sentences[counter].text}
        </h2>
      </div>
      <div className="d-flex flex-row blue w-100 justify-content-center">
        <span className="m-1 onurs full" id="one"></span>
        <span className="m-1 onurs full" id="two"></span>
        <span className="m-1 onurs full" id="three"></span>
        <span className="m-1 onurs full" id="five"></span>
      </div>
      {/* Content */}
      <div className="col-12 p-0 d-flex flex-column align-items-center rounded text-center">
        <PriceTable
          iconType="payment"
          priceBasic={"0"}
          makingTimeBasic={doc.makingTimeBasic}
          numOfPagesBasic={doc.numOfPagesBasic}
          numOfFixesBasic={doc.numOfFixesBasic}
          priceMekif={"0"}
          makingTimeMekif={doc.makingTimeMekif}
          numOfPagesMekif={doc.numOfPagesMekif}
          numOfFixesMekif={doc.numOfFixesMekif}
          priceCustom={"0"}
          makingTimeCustom={doc.makingTimeBasic}
          numOfPagesCustom={doc.numOfPagesBasic}
          numOfFixesCustom={doc.numOfFixesBasic}
          priceMeeting={"0"}
          makingTimeMeeting={doc.makingTimeBasic}
          numOfPagesMeeting={doc.numOfPagesBasic}
          numOfFixesMeeting={doc.numOfFixesBasic}
          
        />
      </div>
    </div>
  );
};

export default StandUp;
