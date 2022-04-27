import "./FAQ.css";
import Question from "./Question";
import { v4 as uuidv2 } from 'uuid';
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
  }
];

const FAQ = ({header}) => {
  const id = uuidv2();
  console.log(id)
  return (
    <div className="col-12 m-0 d-flex flex-column align-items-center mt-5">
      <div className="col-auto d-flex flex-column align-items-center text-center">
        {/* <img src='./assets/img/FAQ.svg' height="100" width="500">FAQ</img> */}
        <h2 className="f36 w5">{header}</h2>
      </div>
      {/* question */}
      <div
        className="accordion col-12 align-items-center d-flex flex-column"
        id={`accordionFlushExample${id}`}
      >
        {questions.map((el, idx) => {
          //change to real value later
  const innerID = uuidv2();

          return <Question answer={el.answer} title={el.title} id={innerID} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
