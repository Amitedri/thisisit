import "./FAQ.css";
import Question from "./Question";
import { v4 as uuidv2 } from "uuid";
const questions = [
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
  {
    title: "טסט טסט טסט טסט טסט טסט טסט ",
    answer:
      "טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט",
  },
];
const Title = ({withTitle}) => {
  const title = withTitle ? (
    <div className="row">
      <img src="./assets/img/FAQ.svg" className="img-fluid" />
    </div>
  ) : null;
  return title
};
const FAQ = ({ header, withTitle }) => {
  const id = uuidv2();
  const onClick = (e)=>{
    let parent = e.target.parentElement;
    let icon = parent.querySelector("i");
    let arrow = parent.querySelector("img");
    icon.classList.toggle("spinElem")
    arrow.classList.toggle("spinElem")

  }

  return (
    <div className="col-12 m-0 d-flex flex-column align-items-center mt-5">
      <Title withTitle={withTitle}/>
      <div className="col-auto d-flex flex-column align-items-center text-center">
        <h2 className="f36 w5 grey">{header}</h2>
      </div>
      {/* question */}
      <div className="accordion col-12 align-items-center d-flex flex-column" id={`accordionFlushExample${id}`}>
        {questions.map((el, idx) => {
          //change to real value later
          const innerID = uuidv2();

          return <Question answer={el.answer} title={el.title} id={innerID} onClick={onClick} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
