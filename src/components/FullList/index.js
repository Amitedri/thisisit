import { useRef, useState } from "react";

const FullList = ({ dataToRender, componentHeader, Children, ExpandedProducts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const setTrigger = ()=>{
    setIsExpanded((prev)=>!prev);
  }
  return (
    <div className="col-12 d-flex flex-column flex-wrap justify-content-center cream mb-2 pb-3 rounded mt-5 align-items-center">
      {isExpanded ? (
        <a href="#" class="btn yellow w-25 text-white f20 w3 mt-3" onClick={setTrigger}>
          סגור
        </a>
      ) : null}
    <div className="col-12 d-flex flex-row flex-wrap justify-content-center cream mb-2 pb-3 rounded mt-5 align-items-center">

      {isExpanded ? <ExpandedProducts dataToRender={dataToRender} /> : <Children componentHeader={componentHeader} dataToRender={dataToRender} />}

    </div>
    <a href="#" class="btn yellow w-25 text-white f20 w3" onClick={setTrigger}>
        {isExpanded ? "סגור" :  "פתח עוד"}
      </a>
    </div>
  );
};

export default FullList;
