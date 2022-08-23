import './ProductSlider.css';
import Product from '../Product';
import Carousel from 'react-elastic-carousel';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, setShowCart } from '../../Slice';
import MekifPurchase from '../MekifButton';
import ServiceButton from '../ServiceButton';

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


const ProductSlider = ({ componentHeader, dataToRender, className, type }) => {
  const disptach = useDispatch();

  const addItem = (value) => {
    disptach(setShowCart(true))

    disptach(addProduct(value));
  };
  const [productsList, setProductsList] = useState(dataToRender);

  const sliderRef = useRef(null);

  return (
    <div className={`w-100 d-flex flex-column align-items-center responsiveContainer cream rounded mt-5 ${className}`}>
      <div className="d-flex flex-column align-items-center mb-2" style={{ width: '90%' }}>
        <h1 className="mt-4 align-self-center">{componentHeader}</h1>

        <hr className="w-50 m-auto bg-dark" style={{ opacity: '0.1' }} />
        <Carousel
          ref={sliderRef}
          breakPoints={breakPoints}
          enableMouseSwipe={true}
          enableSwipe={true}
          pagination={false}
          disableArrowsOnEnd={false}
          isRTL="true"
          itemPadding={[10]}
        >
          {productsList.map((el, idx) => {
            const description = el.h1Content.slice(0, 80);
            return (
              <Product
                description={description}
                title={el.h1}
                key={idx}
                buttonText={el.buttonText}
                actionButtonText={el.actionButtonText}
                href={el.href}
                imgSrc={el.imgSrc}
                BtnChildren={type === 'contract' ? MekifPurchase({ data: el, onItemClick: addItem }) : <ServiceButton />}
                id={el.id}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSlider;
