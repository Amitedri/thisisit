import { useEffect, useRef, useState } from "react";
import Checkbox from "../Checkbox";
import $ from 'jquery'
import "./ContractPreview.css";
const ContractPreview = () => {
  const headerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAgreedTerms, setIsAgreedTerms] = useState(false);
  const [isAgreedConsent, setisAgreedConsent] = useState(false);
  const [coditionsUrl, setCoditionsUrl] = useState("");
  const consentElement = (
    <span>
      הנני מסכים לתנאי השימוש
      <a href="#" className="m-1">
        עם לינק
      </a>
    </span>
  );

  useEffect(() => {
    // if(!isAgreedConsent && !isAgreedTerms){
    //   window.$(".collapse").off("collapse");
    // }
    $(document).on('shown.bs.collapse', function (e) {
      // Get clicked element that initiated the collapse...
    console.log("open")
  });
  //   window.$(".collapse").on("show.bs.collapse", function (e) {
  //     if (isAgreedConsent && setisAgreedConsent) {
  //       setIsExpanded(true);
  //       console.log("isAgreedConsent", isAgreedConsent);
  //       console.log("isAgreedTerms", isAgreedTerms);
  //       console.log("yes");
  //     }
  //     if (!isAgreedConsent || !setisAgreedConsent) {
  //       console.log("no");
  //       console.log("isAgreedConsent", isAgreedConsent);
  //       console.log("isAgreedTerms", isAgreedTerms);
  //       e.preventDefault();
  //       return;
  //     }
  //   });
  //   return () => {
  //     window.$(".collapse").off("show.bs.collapse", function (e) {
  //       // Get clicked element that initiated the collapse...
  //     });
  //   };
  }, []);

  const setTrigger = () => {
    setIsExpanded((prev) => !prev);
  };
  useEffect(() => {
    // headerRef.current.scrollIntoView("alignToTop");
  }, [isExpanded]);
  return (
    <div className="col-12 d-flex flex-column align-items-center text-center cream p-0 rounded" ref={headerRef}>
      <h1 className="f42 w3 mt-5">הסכם ידועים בציבור</h1>
      <h2 className="f32 text-muted p-0">הסכם לחיים משותפים וממון</h2>
      <div className="col-10 d-flex flex-column align-items-start">
        <p> </p>
        <p></p>
        <p></p>
        <p className="align-self-center"> שנערך ונחתם ב___________ ביום ________ בחודש ________ בשנת ________ </p>
        <p>
          <strong>בין: ________________ ת.ז. ___________________</strong>
        </p>
        <p> כתובת _________________________________</p>
        <p>
          {" "}
          (להלן – <strong>האישה</strong>) <strong> מצד אחד;</strong>
        </p>
        <p>
          <strong>לבין: ________________ ת.ז. ___________________</strong>
        </p>
        <p> כתובת _________________________________</p>
        <p>
          <strong> </strong>(להלן – <strong>האיש</strong>) <strong>מצד שני;</strong>
        </p>
        <p>
          וביחד יקראו להלן:<strong> </strong>
          <strong>הבני הזוג</strong>.
        </p>
        <p>
          <strong> </strong>
        </p>
        <p>
          <strong>הואיל: </strong>ובני הזוג קשרו את גורלם זה בזו ומנהלים מערכת זוגית המושתת על יחסי אהבה, מסירות, נאמנות, אורח חיים קבוע, דאגה זה לזו והבטחת
          שלומו ובריאותו של השני.{" "}
        </p>
        <p>
          <strong>והואיל:</strong> ובכוונת בני הזוג להמשיך לצמוח ביחד ואף להרחיב את התא המשפחתי המשותף ביניהם (להלן -<strong>המשפחה</strong>).{" "}
        </p>
        <p>
          <strong>והואיל:</strong>ובני הזוג מעוניינים כעת בליווי עורך דין ידועים בציבור אלעד כהן לקבע ערכים משפחתיים שיהוו בסיס וקרקע פוריה במשך חייהם המשותפים
          כבני זוג ומשפחה.{" "}
        </p>
        <p> </p>
        <p>
          <strong>והואיל:</strong>וכוונותיהם של בני הזוג למסד את המערכת הזוגית שלהם בהסכם ידועים בציבור ו/או הסכם לחיים משותפים וממון זה ורק לא לפי דת משה
          וישראל ו/או תחת מוסד הרבנות ו/או על פי ההלכה.
        </p>
        {isExpanded ? null : (
          <div className="d-grid w-100 d-flex flex-column m-auto align-items-center">
            <a
              class="btn yellow w-25 letter2 w3 mb-2 tryot"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#contractLoader"
              aria-expanded="false"
              aria-controls="contractLoader"
              id="expandContract"
            >
              פתח עוד
            </a>
            <div className="d-flex flex-column col align-items-start justify-content-start">
            <div class="form-check d-flex flex-row justify-content-center align-items-center" style={{ direction: "rtl" }}>
              <input
                class="form-check-input m-1"
                type="checkbox"
                value={isAgreedConsent}
                id="flexCheckDefault2"
                style={{ direction: "rtl" }}
                onChange={() => setisAgreedConsent((prev) => !prev)}
              />
              <label class="form-check-label m-1" for="flexCheckDefault" style={{ direction: "rtl" }}>
                הנני מסכים לתנאי השימוש שבאתר
              </label>
            </div>
            <div class="form-check d-flex flex-row justify-content-center align-items-center" style={{ direction: "rtl" }}>
              <input
                class="form-check-input m-1"
                type="checkbox"
                value={isAgreedTerms}
                id="flexCheckDefault"
                style={{ direction: "rtl" }}
                onChange={() => setIsAgreedTerms((prev) => !prev)}
              />
              <label class="form-check-label m-1" for="flexCheckDefault" style={{ direction: "rtl" }}>
                {consentElement}
              </label>
            </div>
            </div>
            {/* <Checkbox value={isAgreedTerms} setValue={setIsAgreedTerms} title="" />

            <Checkbox value={isAgreedTerms} setValue={setIsAgreedTerms} title={consentElement} /> */}
          </div>
        )}

        <div class="collapse mt-5 border-0" id="contractLoader">
          <div class="card cream border-0 align-items-start text-end">
            <p>
              <strong>והואיל:</strong>וברצון בני הזוג להביא הסכם ממון ידועים בציבור זה בפני בית משפט לענייני משפחה וליתן לו תוקף מחייב של פסק דין.{" "}
            </p>
            <p> </p>
            <p>
              <strong>לפיכך הוצהר, הותנה והוסכם בין בני הזוג כדלקמן:</strong>
            </p>
            <p>
              <strong>כללי</strong>
            </p>
            <ol>
              <li>המבוא שבתחילת הסכם חיים משותפים זה מהווה חלק בלתי נפרד הימנו ומחייב בתוכנו. </li>
              <li>הכותרות בהסכם ממון ידועים בציבור זה נועדו לצרכי נוחות בלבד, והן לא תשמשנה לפרשנות בהסכם זה. </li>
              <li>האמור בהסכם חיים משותפים זה מנוסח בלשון זכר מטעמי נוחות בלבד אולם כל האמור בלשון זכר משמעו גם בלשון נקבה. </li>
            </ol>
            <p>
              <strong>ערכים משפחתיים ומטרות משותפות</strong>
            </p>
            <ol>
              <li>
                בני הזוג מצהירים כי הם מעוניינים שגם בהמשך חייהם הקשר ביניהם יהא מושתת על כבוד הדדי, אהבה, תקשורת טובה, סובלנות, נתינה, ויתור והתגמשות, תמיכה
                וביטחון.{" "}
              </li>
              <li>
                בני הזוג מצהירים כי הם מוכנים לעשות את כל הנדרש לקיום תקשורת מעולה ביניהם ולמציאת דפוסי פתרון באהבה וסבלנות למחלוקות ביניהם באופן שתכבד ותכיל
                אחד את השנייה. בני הזוג מתחייבים לנהוג בהגינות, שקיפות ובתום לב אחד כלפי השנייה ולהתחשב בצרכיו של בן הזוג השני.
              </li>
              <li>
                בני הזוג מצהירים כי הם מעוניינים כי ערכי המשפחה והתנהלותה תהא ________________, ________________, ________________, ________________,
                ________________, לרבות ________________, ________________.{" "}
              </li>
            </ol>
            <p>
              <strong>היבטים רכושיים וכלכליים שאינם ברי איזון</strong>
            </p>
            <ol>
              <li>
                בני הזוג מצהירים ומסכימים כי אינם מקבלים על עצמם כל הסדר מסוג איזון משאבים בכל רכוש ו/או התחייבויות כמופיע בחוק יחסי ממון בין בני זוג,
                התשלג-1973 ללא יוצא מהכלל ולרבות חלילה בכל סיום הקשר בין בני הזוג.{" "}
              </li>
              <li>מבלי לפגוע בכלליות הסכם ממון ידועים בציבור והאמור לעיל, נכון ליום החתימה על הסכם חיים משותפים זה בבעלות האישה, הזכויות הכלכליות כדלקמן: </li>
            </ol>
            <p>
              א. זכויות בדירת מגורים ברחוב ______________________ הידועה ורשומה בלשכת רישום המקרקעין כגוש __________ חלקה __________ ו/או כל דירה במקומה ו/או
              חלופית ו/או תחתיה ו/או כל דירה אחרת (להלן: <strong>דירת האישה</strong>
              ).{" "}
            </p>
            <p>ב. קרן פנסיה ב _________________________________________.</p>
            <p>ג. חשבון בנק בבנק __________ סניף __________ מס חשבון __________. </p>
            <p>ד. רכב מסוג __________ דגם __________ שנת יצור __________. </p>
            <ol>
              <li>מבלי לפגוע בכלליות הסכם ידועים בציבור והאמור לעיל, נכון ליום החתימה על הסכם ידועים בציבור זה בבעלות האיש, הזכויות הכלכליות כדלקמן: </li>
            </ol>
            <p>
              א. נהנה ממלוא הזכויות של דירת מגורים, שאינה רשומה על שמו ברחוב __________, __________ הידועה ורשומה בלשכת רישום המקרקעין כגוש __________ חלקה
              __________ ו/או כל דירה במקומה ו/או חלופית ו/או תחתיה ו/או כל דירה אחרת (להלן: <strong>דירת האיש</strong>).{" "}
            </p>
            <p>ב. חשבון בנק בבנק __________ סניף __________ מס חשבון __________.</p>
            <p>ג. רכב מסוג __________ דגם __________ שנת יצור __________.</p>
            <p>
              <strong>היבטים רכושיים וכלכליים ברי איזון</strong>
            </p>
            <ol>
              <li>
                מבלי לפגוע בכלליות ההסכם לחיים משותפים והאמור לעיל, בני הזוג מצהירים ומסכימים כי במידה וכן ירצו ליצור ביניהם שיתוף בזכויות ו/או חובות כלכליות
                כלשהם (להלן:<strong>זכויות וחובות משותפות</strong>) אזי יפעלו בני הזוג כדלקמן:
              </li>
            </ol>
            <p>א. בני הזוג יערכו החלטה בכתב לשיתוף הזכות, או, החובה הכלכלית ועליה יחתמו. </p>
            <p>ב. כל בן זוג ישלם ו/או יתחייב עבור חצי מתמורת הזכות, או, החובה הכלכלית.</p>
            <p>ג. בני הזוג ירשמו את הזכות, או, החובה הכלכלית בחלקים שווים במרשם הרלוונטי לכל זכות, או, חובה.</p>
            <ol>
              <li>
                מבלי לפגוע בכלליות הסכם ממון ידועים בציבור והאמור לעיל, למען ניהול נוח של משק הבית ורווחת המשפחה ולמטרה זו בלבד בני הזוג יפתחו חשבון בנק משותף
                בו כל בן זוג יפקיד בכל חודש מחצית מהוצאות הדרושות לניהול משק הבית, או, כל סכום אחר שמוסכם על בני הזוג פה אחד באותה העת (להלן:
                <strong>חשבון משותף</strong>). יובהר, כי ניהול החשבון המשותף אינו מעיד ו/או יעיד על כוונת שיתוף כל שהיא נוספת של בני הזוג מהמפורט בהסכם חיים
                משותפים זה.
              </li>
            </ol>
            <p>
              <strong>סיום הקשר הזוגי עקב פטירה</strong>
            </p>
            <ol>
              <li>בני הזוג מצהירים ומסכימים כי מי מהם יהיה זכאי לקבל כל זכות שהיא שמעניקות הרשויות השלטוניות באשר הם במקרה של חלילה פטירה. </li>
            </ol>
            <p>
              <strong>סיום הקשר הזוגי עקב פירוד </strong>
            </p>
            <ol>
              <li>
                במידה ואחד/ת מבני הזוג יהא מעוניין/ת לסיים את הקשר הזוגי הבן הזוג השני יכבד את החלטתו/ה ומתחייב/ת להסכים לסיום הקשר כמפורט בהסכם ידועים בציבור
                זה לרבות חלוקת הזכויות והחובות הכלכליות (האישיות והמשותפות) כמפורט בהסכם זה.
              </li>
              <li>
                במידה ואחד מהצדדים יגיע למסקנה כי אין ביכולתו, מכל סיבה שהיא, להמשיך את הקשר הזוגי בשלום בית עם בן הזוג השני ובכוונתו להיפרד, יהא עליו לשלוח
                הודעה בכתב עם אישור מסירה לבן זוג ובו יודיע לו על החלטתו הסופית (להלן:
                <strong>הודעת הפירוד</strong>).
              </li>
              <li>
                מוסכם על הצדדים כי מיום קבלת אישור מסירת הודעת הפירוד יהא על בני הזוג לפעול כמופיע בהסכם ממון ידועים בציבור זה תוך 30 יום. הצדדים יבצעו את
                ההסכמות הקבועות בהסכם זה כמפורט בו וזאת על אף כל פעולה אחרת שהתחייבו לבצע לאחר.{" "}
              </li>
            </ol>
            <p>
              <strong>היבטים רכושיים וכלכליים עקב הפירוד</strong>
            </p>
            <ol>
              <li>
                תוך 30 יום מאת אישור מסירת הודעת הפירוד יבוצע על ידי הצדדים מאזן בין הזכויות לחובות המשותפות (להלן:"
                <strong>המאזן</strong>") של הצדדים וככל שישארו זכויות ו/או רכוש ו/או כספים משותפים הם יחולקו שווה בשווה בין הצדדים בכסף ו/או בעין. היה ולא יהא
                ניתן לחלק בעין רכוש שהוגדר כמשותף, הרכוש ימכר ושוויו יחולק באופן שווה בין הצדדים. היה ולאחר המאזן ישארו רק חובות משותפים חובות אלו יחולקו שווה
                בשווה בין הצדדים. למען הסר ספק, אין בסעיף זה כדי לפגוע בכלליות המפורט בהסכם ידועים בציבור זה לרבות רצונם של בני הזוג להפרדה מלאה ברכושם.{" "}
              </li>
              <li>
                מבלי לפגוע בכלליות הסכם ממון ידועים בציבור והאמור לעיל, היה ובעת הפסקת החיים המשותפים כידועים בציבור ו/או הפירוד יהיו לצדדים ילד ו/או ילדים מתחת
                לגיל 21 אזי חשבון הבנק המשותף ימשיך להתקיים ויהפוך להיות חשבון בנק שבאמצעותו ינהלו בני הזוג את ההוצאות הכרוכות בגידול הילדים שווה בשווה עד
                שהאחרון מהם יגיע לגיל 21.
              </li>
              <li>
                הצדדים מסכימים כי הוצאות הכרוחות בהפסקת החיים המשותפים כידועים בציבור ו/או הפירוד ו/או כל ההוצאות והאגרות שיידרשו לשלם בית המשפט לענייני משפחה
                יחולקו שווה בשווה בין הצדדים.
              </li>
              <li>
                בני הזוג מצהירים ומסכימים, כי בכל מקרה לרבות סיום הקשר הזוגי ו/או הפסקת החיים המשותפים כידועים בציבור ו/או הפירוד האישה לא תהא זכאית למזונות
                אישה וכי האישה מוותרת על כל טענה ו/או דרישה כאמור לסעיף זה.
              </li>
            </ol>
            <p>
              <strong>הקשרים והחלת החוק</strong>
            </p>
            <ol>
              <li>
                בני הזוג מצהירים ומסכימים כי רצונותיהם המופעים בפירוט הוראות הסכם חיים משותפים זה יגברו על כל חוק ו/או תקנה ו/או הלכה שקיימת ו/או שתחוקק לרבות
                אך לא רק, חזקת השיתוף וחוק יחסי ממון בין בני זוג, התשלג-1973.{" "}
              </li>
              <li>
                מבלי לפגוע בכלליות הסכם ממון ידועים בציבור דוגמא זה והאמור לעיל, בני הזוג מודעים לכך שהסכם זה אינו מהווה תחליף לכתיבת צוואה. בני הזוג מצהירים
                ומסכימים כי כל אחד מבני הזוג רשאי לכתוב את צוואתו לפי כרצונו והשקפתו.
              </li>
              <li>
                בני הזוג מצהירים ומסכימים כי הסמכות המשפטית היחידה והבלעדית לפירוש הסכם ממון ידועים בציבור זה ואכיפתו ו/או פתרון חילוקי דעות בנוגע לחייהם
                המשותפים ומשפחתם כפופים אליה היא בית המשפט לענייני משפחה, לפי מקום מושבם המשותף האחרון של בני הזוג.{" "}
              </li>
              <li>
                כמפורט, בני הזוג מבקשים מכבוד בית המשפט לענייני משפחה ליתן להסכם חיים משותפים זה תוקף של פסק דין על פי סעיף 3(ג) לחוק בית המשפט לעניני משפחה,
                תשנה - 1995.
              </li>
            </ol>
            <p>
              <strong>שונות</strong>
            </p>
            <ol>
              <li>
                הסכם ממון ידועים בציבור זה מבטל כל החלטה ו/או הסכם ו/או התחייבות ו/או מצג שהיתה בין בני הזוג בכתב ו/או בעל פה ו/או בהתנהגות טרם חתימה על הסכם
                ידועים בציבור זה.
              </li>
              <li>
                בני הזוג מצהירים כי קראו את הסכם ממון ידועים בציבור לדוגמא זה ומבנים היטב את תוכן סעיפיו ותוצאותיו וכי הם חותמים עליו ברצון חופשי וללא כל כפייה.
              </li>
              <li>
                בני הזוג מסכימים כי כל שינוי ו/או תיקון ביחס למפורט ו/או קבוע בהסכם חיים משותפים זה על כל סעיפיו יהא בכתב לאחר הסכמת שני הצדדים ובחתימתם.{" "}
              </li>
            </ol>
            <p>
              <strong> </strong>
            </p>

            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
          </div>
          <div className="align-self-center d-flex flex-column">
            <p className="align-self-center">
              <strong> </strong> <strong>ולראיה באו בזה בני הזוג על החתום</strong>
            </p>
            <div className="align-self-center d-flex flex-row mb-5 ">
              <div className="align-self-center d-flex flex-row ms-5">
                <p className="align-self-center"> האישה</p>
                <p className="align-self-center">
                  <strong>______________________</strong>
                </p>
              </div>
              <div className="align-self-center d-flex flex-row">
                <p className="align-self-center">האיש</p>
                <p className="align-self-center">
                  <strong>______________________</strong>
                </p>
              </div>
            </div>
            {isExpanded ? (
              <div className="d-grid w-100 d-flex flex-column m-auto align-items-center">
                <a class="btn yellow w-25 letter2 w3 m-2" type="button">
                  הורד הסכם
                </a>
                <a
                  class="btn yellow w-25 letter2 w3 mb-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contractLoader"
                  aria-expanded="false"
                  aria-controls="contractLoader"
                  id="expandContract2"
                >
                  סגור
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* rest of Contract */}
      </div>
    </div>
  );
};

export default ContractPreview;
