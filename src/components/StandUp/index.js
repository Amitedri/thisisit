import "./StandUp.css";
const buttons = [
  {
    header: "הסכם",
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
    ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
    נובש ערששף. זותה מנק הבקיץ אפאח דלאמת`,
    buttonText: "רכישה",
    withBorder: true,
  },
  {
    header: "שירות",
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
    ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
    נובש ערששף. זותה מנק הבקיץ אפאח דלאמת`,
    buttonText: "רכישה",
    withBorder: false,
  },
];
const PurchaseBox = ({ header, text, buttonText,withBorder }) => {
  return (
    <div className={`col-6 p-0 d-flex flex-column align-items-center rounded text-center mt-3 ${withBorder ? "standupBorder" : 'emptyLol'}`}>
      {/* header */}
      <h1 className="f30 w3 col-6">{header}</h1>
      <hr className="w-25 p-0 m-0 mb-3" />
      <p className="f16 w2 col-8 p-3">{text}</p>
      <div className="d-grid col-5">
        <a class="btn yellow letter2 w3 m-2 blueText" type="button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const StandUp = () => {
  return (
    <div className="col-12 cream d-flex flex-column flex-wrap align-items-center responsiveContainer p-0 mt-5 rounded standupContainer">
      {/* standup header */}
      <div className="col-12 p-0 lightBlue d-flex flex-row align-items-center p-0 headerContainer rounded">
        <i class="fa-solid fa-arrow-down-long f100 w5 me-5 yellowText"></i>
        <h1 className="m-auto specialStandHeader p-0 yellowText text-center">STAND UP FOR YOUR RIGHTS</h1>
        <i class="fa-solid fa-arrow-down-long f100 w5 ms-5 yellowText"></i>
      </div>
      {/* Content */}
      <div className="col-12 p-0 d-flex flex-row flex-wrap align-items-center rounded">
        {buttons.map((el) => (
          <PurchaseBox buttonText={el.buttonText} header={el.header} text={el.text} key={el.buttonText} withBorder={el.withBorder} />
        ))}
      </div>

    </div>
  );
};

export default StandUp;
