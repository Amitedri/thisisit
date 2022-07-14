import './Cart.css';

const Cart = ({ openCart, setOpenCart }) => {
  if (!openCart) {
    return null;
  }
  return (
    <div
      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6-col-sm-10 col-10 position-absolute start-0 top-100 position-relative shadow-lg border border-dark"
      style={{ zIndex: '9999' }}
    >
      <span
        className="position-absolute top-0 mt-2 ms-2 start-0 f30 fw-bold border rounded text-center pointer blueText"
        style={{ height: '25px', width: '25px', lineHeight: '15px', zIndex: 9999 }}
        onClick={setOpenCart}
      >
        x
      </span>
      <div className="col-12 bg-white position-absolute top-0 cartContainer d-flex flex-column align-items-center">
        <h1 className="">הסל שלי</h1>

        <hr className="w-90 blue" />
        <div className="col-12 d-flex flex-column align-items-center purContainer">
        {/* product */}
          <div className="col-12 d-flex align-items-center  d-flex flex-column shadow-sm prProd border-bottom mt-2">
            <div className="col-11 d-flex flex-row align-items-center position-relative">
              <span
                className="position-absolute top-0 start-0 f28 border rounded text-center pointer blueText"
                style={{ height: '25px', width: '25px', lineHeight: '15px' }}
              >
                x
              </span>
              {/* img */}
              <img className="rounded col-3 figure-img" src="../assets/img/מדיניות פרטיות.jpg" height="150" />
              {/* product info */}
              <div className="col-8 d-flex flex-column align-items-center">
                <span className="f26 mt-1">שם המוצר</span>
                <span className="mt-1">עו"ד אלעד כהן</span>
                <div className="col-12 d-flex flex-row align-items-center justify-content-center">
                  <span className=" mt-1 greyText" style={{ textDecoration: 'line-through', opacity: 0.5 }}>
                    250 ₪
                  </span>
                  <span className="me-3 mt-1">210 ₪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex flex-column align-items-center shadow-sm position-absolute bottom-0 h-25 mt-5">
          <hr className="w-90 blue" style={{ opacity: 0.3 }} />
          <div className="col-11 greyText f18 d-flex flex-row align-items-center justify-content-between">
            <span className="">סכום ביניים</span>
            <span className="">250 ₪</span>
          </div>

          <div className="col-12 d-flex flex-row align-self-center justify-content-center">
            <span className="m-1">סך הכל</span>
            <span className="m-1">250 ₪</span>
          </div>
          <div className="btn btn-success rounded-5 col-6"> מעבר לתשלום</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
