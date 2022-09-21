const Question = ({ title, answer,id,onClick,idx }) => {
  return (
    <div className="accordion-item col-12 m-1 p-2 cream question" data-qnum={idx}>
      <h2 className="accordion-header" id={`flush-headingOne${id}`}>
        <button
          className="col-12 customeAccordionItem fs-3 cream rounded text-center d-flex flex-row justify-content-centet align-items-center"
          type="button"
          data-bs-toggle="collapse"
           data-bs-target={`#collapseExample${id}`}
          aria-expanded="true"
          aria-controls={`collapseExample${id}`}
          onClick={onClick}
        >
          <img className="float-end mt-1" height="25" width="25" src="../assets/icons/arrow.svg" />
          <span className="col">{title}</span>
          <img className="float-start mt-1" height="25" width="25" src="../assets/icons/arrow.svg" />
        </button>
      </h2>

      <div className="collapse show" id={`collapseExample${id}`}>
        <div className="card card-body white ">{answer}</div>
      </div>
    </div>
  );
};

export default Question;
