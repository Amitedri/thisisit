import { useRef, useState } from 'react';
import './ProductSlider.css';
import Carousel from 'react-elastic-carousel';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Slice';
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

export const Product = ({ title, description, buttonText, actionButtonText, href, imgSrc,BtnChildren,id }) => {
  return (
    <div className="card align-items-center p-0 col-12" style={{ maxWidth: '550px' }}>
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body col-12 d-flex flex-column align-items-center text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center f14">{description} </p>
        <a href={href} className="btn blue text-white m-1 w-75">
          {buttonText}
        </a>
        <a  className={`btn yellowLight text-white f18  w-75`} data-purchaseid={id}>
          {BtnChildren}
          </a>
      </div>
    </div>
  );
};
const ProductSlider = ({ componentHeader, dataToRender, className, type }) => {
  const [productsList, setProductsList] = useState(dataToRender);
  const disptach = useDispatch();

  const addItem = (value) => {
    disptach(addProduct(value));
  };
  const sliderRef = useRef(null);

  console.log('dataToRender', dataToRender);
  return (
    <div className={`w-100 d-flex flex-column align-items-center responsiveContainer cream rounded ${className}`}>
      <div className="d-flex flex-column align-items-center mb-2" style={{ width: '90%' }}>
        <h1 className="mt-0 align-self-center componentHeader">{componentHeader}</h1>

        <hr className="w-50 m-auto bg-dark" style={{ opacity: '0.1' }} />
        <Carousel
          ref={sliderRef}
          breakPoints={breakPoints}
          enableMouseSwipe={true}
          enableSwipe={true}
          pagination={false}
          disableArrowsOnEnd={false}
          isRTL="true"
          itemPadding={[5]}
        >
          {productsList.map((el, idx) => {
            const description = el.h1Content.slice(0, 80);
            return (
              <Product
                description={description}
                title={el.h1}
                actionButtonText={el.actionButtonText}
                buttonText={el.buttonText}
                key={idx}
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

const FullList = ({ dataToRender, componentHeader, ExpandedProducts, category,type }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let listRef = useRef(null);
  const setTrigger = () => {
    setIsExpanded((prev) => !prev);
  };
  const close = () => {
    setIsExpanded((prev) => !prev);
    let id = `close${componentHeader}`;
    listRef.current.scrollIntoView();
  };
  return (
    <div className="col-12 d-flex flex-column flex-wrap justify-content-center cream rounded align-items-center mb-5" data-cat={category}>
      {isExpanded ? (
        <a class="btn yellow w-25 text-white f20 w3 mt-5 mb-5" id={`close${componentHeader}`} onClick={close}>
          סגור
        </a>
      ) : null}
      <hr className="w-50 m-auto bg-dark" style={{ opacity: '0.1' }} />

      <div className="col-12 d-flex flex-row flex-wrap justify-content-center cream rounded align-items-center" ref={listRef}>
        {isExpanded ? <ExpandedProducts dataToRender={dataToRender} /> : <ProductSlider componentHeader={componentHeader} dataToRender={dataToRender} type={type}/>}
      </div>
      <a
        class={`btn col-xxl-3 col-xl-3 col-lg-3 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none openMoreBtn lightBlue text-white f20 w3 mb-5 mt-2 ${
          isExpanded ? 'mt-5' : 'nothing'
        }`}
        onClick={setTrigger}
      >
        {isExpanded ? 'סגור' : 'פתח עוד'}
      </a>
    </div>
  );
};

export default FullList;
