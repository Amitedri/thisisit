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

const Product = ({ title, description }) => {
  return (
    <div class="card m-4 align-items-center p-0">
      <img src="./assets/img/exp.png" class="card-img-top" />
      <div class="card-body d-flex flex-column align-items-center">
        <h5 class="card-title">sCard title</h5>
        <p class="card-text text-center">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn yellow w-75 text-white">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
const ProductSlider = ({ componentHeader, dataToRender }) => {
  const [productsList, setProductsList] = useState(dataToRender);

  const sliderRef = useRef(null);

  // useEffect(() => {
  //   setProductsList(() => dataToRender);
  // }, []);

  return (
    <div className="w-100 d-flex flex-column align-items-center responsiveContainer lightBlue rounded mt-5 mb-3">
      <h1 className="mt-3">{componentHeader}</h1>
      <Carousel
        ref={sliderRef}
        breakPoints={breakPoints}
        enableMouseSwipe={true}
        enableSwipe={true}
        pagination={false}
        disableArrowsOnEnd={false}
      >
        {productsList.map((el, idx) => {
          return <Product description={el.description} title={el.title} key={idx} />;
        })}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
