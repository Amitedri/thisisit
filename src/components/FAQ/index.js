import './FAQ.css';
import Question from './Question';
import { v4 as uuidv2 } from 'uuid';
import { useState } from 'react';
const questions = [
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
  {
    title: 'טסט טסט טסט טסט טסט טסט טסט ',
    answer:
      'טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט טסט ט',
  },
];

const FAQ = ({ header, withTitle, questions }) => {
  const [expanded, setIsExpanded] = useState(false);
  const id = uuidv2();
  const onClick = (e) => {
    let parent = e.target.parentElement;
    let icon = parent.querySelector('i');
    let arrow = parent.querySelectorAll('img');
    arrow.forEach((el) => {
      el.classList.toggle('spinElem');
    });
  };
  const handleClick = (e)=>{
    e.preventDefault();

  }
  return (
    <div className="col-12 m-0 d-flex flex-column align-items-center mt-5" data-cat={header}>
      <div className="col-auto d-flex flex-column align-items-center text-center">
        <h1>{header}</h1>
      </div>
      {expanded ? (
        <div className="accordion col-12 align-items-center d-flex flex-column" id={`accordionFlushExample${id}`}>
          {questions.map((el, idx) => {
           
            //change to real value later

            
            const innerID = uuidv2();

            return <Question answer={el.answer} title={el.title} id={innerID} onClick={onClick} />;
          })}
        </div>
      ) : (
        <div className="accordion col-12 align-items-center d-flex flex-column" id={`accordionFlushExample${id}`}>
          {questions.map((el, idx) => {
             if (idx >= 3) {
              return null;
            }
            //change to real value later
            const innerID = uuidv2();

            return <Question answer={el.answer} title={el.title} id={innerID} onClick={onClick} />;
          })}
        </div>
      )}

      <a href="#" class="btn blue w-25 text-white f20 w3 mt-2" onClick={() => setIsExpanded((prev) => !prev)}>
        פתח עוד
      </a>
    </div>
  );
};

export default FAQ;
