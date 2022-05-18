import { useRef, useState } from "react";
import "./ProductSlider.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1800, itemsToShow: 3, itemsToScroll: 3 },
  { width: 2000, itemsToShow: 3, itemsToScroll: 3 },
  { width: 2200, itemsToShow: 3, itemsToScroll: 3 },
];

export const Product = ({ title, description }) => {
  return (
    <div className="card align-items-center p-0">
      <img src="./assets/img/exp.png" className="card-img-top" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">sCard title</h5>
        <p className="card-text text-center">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="/contractpage" className="btn yellow text-white m-1 w-75">
        פתח הסכם לדוגמא
          </a>
          <a href="/checkout" className="btn yellowLight text-white m-1 w-75">
           רכוש 69.90₪
          </a>
      </div>
    </div>
  );
};
const ProductSlider = ({ componentHeader, dataToRender,className }) => {
  const [productsList, setProductsList] = useState(dataToRender);

  const sliderRef = useRef(null);


  return (
    <div className={`w-100 d-flex flex-column align-items-center responsiveContainer cream rounded mt-5 ${className}`}>

      <div className="d-flex flex-column align-items-center mb-2" style={{ width: "90%" }}>
        <h1 className="mt-0 align-self-center">{componentHeader}</h1>

        <hr className="w-50 m-auto bg-dark" style={{opacity:"0.1"}}/>
        <Carousel
          ref={sliderRef}
          breakPoints={breakPoints}
          enableMouseSwipe={true}
          enableSwipe={true}
          pagination={false}
          disableArrowsOnEnd={false}
          isRTL="true"
          itemPadding={[35]}
          
          
        >
          {productsList.map((el, idx) => {
            return <Product description={el.description} title={el.title} key={idx} />;
          })}
        </Carousel>
      </div>
      
    </div>
  );
};

const FullList = ({ dataToRender, componentHeader, ExpandedProducts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let listRef = useRef(null)
  const setTrigger = ()=>{
    setIsExpanded((prev)=>!prev);
  }
  const close = ()=>{
    setIsExpanded((prev)=>!prev);
    let id =`close${componentHeader}`
    listRef.current.scrollIntoView()
    
  }
  return (
    <div className="col-12 d-flex flex-column flex-wrap justify-content-center cream rounded align-items-center mb-5">
      {isExpanded ? (
        <a class="btn yellow w-25 text-white f20 w3 mt-5 mb-5" id={`close${componentHeader}`} onClick={close}>
          סגור
        </a>
      ) : null}
        <hr className="w-50 m-auto bg-dark" style={{opacity:"0.1"}}/>

    <div className="col-12 d-flex flex-row flex-wrap justify-content-center cream rounded align-items-center" ref={listRef}>

      {isExpanded ? <ExpandedProducts dataToRender={dataToRender} /> : <ProductSlider componentHeader={componentHeader} dataToRender={dataToRender} />}

    </div>
    <a  class={`btn yellow w-25 text-white f20 w3 mb-5 mt-2 ${isExpanded ? "mt-5" : 'nothing'}`} onClick={setTrigger}>
        {isExpanded ? "סגור" :  "פתח עוד"}
      </a>
    </div>
  );
};

export default FullList;
