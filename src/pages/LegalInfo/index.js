import DropDown from "../../components/DropDown";
import FAQ from "../../components/FAQ";

const LegalInfo = () => {
  return (
    <div className="col-10 m-auto d-flex flex-column align-items-center">
      <h1 className="f42 mb-2 mt-5">מידע משפטי</h1>
      <div className="col-6 d-flex flex-row justify-content-center mt-5">
        <DropDown header={"תחום משפטי"} key={"קטגוריותקטגוריות"} colorClass="lightBlueStrong" />
        <DropDown header={"שאלה משפטית"} key={"שאלה משפטית"} colorClass="lightBlueStrong" />
      </div>
      <FAQ header={"משפחה"} />
      <a href="#" class="btn lightBlue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} />
      <a href="#" class="btn lightBlue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} />
      <a href="#" class="btn lightBlue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} />
      <a href="#" class="btn lightBlue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
      <FAQ header={"משפחה"} />
      <a href="#" class="btn lightBlue w-25 text-white f20 w3 mt-2">
        פתח עוד
      </a>
    </div>
  );
};

export default LegalInfo;
