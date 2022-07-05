import DropDown from "../../components/DropDown";
import FAQ from "../../components/FAQ";
import {general} from '../../Data/Questions'
const serviceCategoryDrop = [
  {
    title: 'משפחה',
  },
  {
    title: 'ממון',
  },{
    title: 'חברות',
  },{
    title: 'כללי',
  },
];
const LegalInfo = () => {
  return (
    <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 m-auto d-flex flex-column align-items-center">
      <h1 className="f42 mb-2 mt-2">מידע משפטי</h1>
      <div className="col-6 d-flex flex-row justify-content-center mt-2">
        <DropDown header={"תחום משפטי"} key={"קטגוריותקטגוריות"} colorClass="lightBlueStrong" values={serviceCategoryDrop} />
        <DropDown header={"שאלה משפטית"} key={"שאלה משפטית"} colorClass="lightBlueStrong" values={serviceCategoryDrop} />
      </div>
      <FAQ header={"משפחה"} questions={general} />
      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} questions={general} />
      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} questions={general} />
      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} questions={general} />
      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} questions={general} />
      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
    </div>
  );
};

export default LegalInfo;
