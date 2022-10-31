import './FAQ.css';
import Question from './Question';
import { v4 as uuidv2 } from 'uuid';
import { useEffect, useState } from 'react';

const FAQ = ({ header, withTitle, questions, cat }) => {
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
  useEffect(()=>{
    let elem = document.querySelectorAll('.question');
    if(!expanded){
      elem.forEach((el)=>{
        let num = el.dataset.qnum;
        if(num >6){
          el.classList.add("d-none")
        }
      })
      return
    }
    if(expanded){
      elem.forEach((el)=>{
        let num = el.dataset.qnum;
        if(num >6){
          el.classList.remove("d-none")
        }
      })
    }
  },[expanded])
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentElement.scrollIntoView();
    setIsExpanded((prev) => !prev)
  };
  return (
    <div className="col-12 m-0 d-flex flex-column align-items-center mt-2" data-cat={cat}>
      <div className="col-auto d-flex flex-column align-items-center text-center">
        <h1>{header}</h1>
      </div>
      <div className='col-12'>
      {
        <div className="accordion col-12 align-items-center d-flex flex-column" id={`accordionFlushExample${id}`}>
          {questions.map((el, idx) => {
            const innerID = uuidv2();

            return <Question idx={idx} answer={el.answer} title={el.title} id={innerID} onClick={onClick} />;
          })}
        </div>
      }
      </div>


      <div class="btn blue w-25 text-white f20 w3 mt-2" onClick={handleClick}>
        {expanded ? 'סגור' : 'פתח עוד'}
      </div>
    </div>
  );
};

export default FAQ;
