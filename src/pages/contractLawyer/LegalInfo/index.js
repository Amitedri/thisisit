import FAQ from "../../../components/FAQ";
import "./LegalInfo.css";

const LegalInfo = () => {
  return (
    <div className="col-auto d-flex flex-column align-items-center">
        <h1 className="f42 mb-2 mt-5">מידע משפטי</h1>
      <FAQ header={"משפחה"} />
      <FAQ header={"משפחה"} />
      <FAQ header={"משפחה"} />
      <FAQ header={"משפחה"} />
      <FAQ header={"משפחה"} />
    </div>
  );
};

export default LegalInfo;
