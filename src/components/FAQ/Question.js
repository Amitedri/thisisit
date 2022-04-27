const Question = ({ title, answer,id }) => {
  return (
    <div className="accordion-item col-12">
      <h2 className="accordion-header" id={`flush-headingOne${id}`}>
        <button
          className="col-12 customeAccordionItem lightBlue rounded text-center align-items-center f26"
          type="button"
          data-bs-toggle="collapse"
           data-bs-target={`#collapseExample${id}`}
          aria-expanded="false"
          aria-controls={`collapseExample${id}`}
        >
          <i class="fa-solid fa-plus float-right m-1 invertColor"></i>
          {title}
          <img className="float-left mt-1" height="25" width="25" src="./assets/icons/arrow.svg" />
        </button>
      </h2>

      <div className="collapse" id={`collapseExample${id}`}>
        <div className="card card-body cream ">{answer}</div>
      </div>
    </div>
  );
};

export default Question;
