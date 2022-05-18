import "./ProductSlider.css";

import Carousel from "react-elastic-carousel";
import { useEffect, useRef, useState } from "react";

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
        <h1 className="mt-4 align-self-center">{componentHeader}</h1>

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

export default ProductSlider;
