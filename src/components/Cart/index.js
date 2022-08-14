import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setProducts, removeProduct } from '../../Slice';
import './Cart.css';
import axios from 'axios';
const removeCurrentProduct = (id, disptach) => {
  disptach(removeProduct({ id }));
};
const Product = ({ productName, price, id, disptach, packName }) => {
  console.log(id);
  return (
    <div
      className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center  d-flex flex-column prProd border-bottom mt-2"
      style={{ overflowX: 'hidden' }}
    >
      <div className="col-11 d-flex flex-xxl-row  flex-xl-row  flex-lg-row  flex-md-row  flex-sm-column flex-column align-items-center position-relative">
        <span
          className="position-absolute top-0 start-0 f28 border rounded text-center pointer blueText"
          onClick={() => removeCurrentProduct(id, disptach)}
          style={{ height: '25px', width: '25px', lineHeight: '15px' }}
        >
          x
        </span>
        {/* img */}
        <img className="rounded figure-img" src={`../assets/img/contracts/${productName}.jpg`} height="150" />
        {/* product info */}
        <div className="col-8 d-flex flex-column align-items-xxl-start align-items-xl-start align-items-lg-start align-items-md-start align-items-sm-center align-items-center m-3">
          <span className="f26 mt-1 text-center">
            {productName}-{packName}
          </span>
          <span className="mt-1 w5 text-muted">עו"ד אלעד כהן</span>
          <span className="mt-1 w3">{price} ₪</span>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ openCart, setOpenCart }) => {
  const disptach = useDispatch();
  const products = useSelector((state) => state.prods.products) || []
  const [localProducts, setLocalProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isNext, setIsNext] = useState(0);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentsNum, setPaymentsNum] = useState(1);
  const [iframeUrl, setIframeUrl] = useState('');

  const [paymentStatus, setpaymentStatus] = useState(false);
  const setPaymentDetails = (e) => {
    let nameSplit = name.split(' ');
    if (nameSplit.length == 1 || nameSplit.length == 0) {
      console.log('name wrong');
      return;
    }
    if (phone.length < 8) {
      console.log(phone.length);
      console.log('phone wrong');
      return;
    }
    let isEmailOk = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isEmailOk) {
      console.log('email wrong');

      return;
    }
    setpaymentStatus((prev)=>!prev);
  };
  useEffect(() => {
    let total = 0;
    localProducts.forEach((el) => {
      let parsed = parseInt(el.price);
      total += parsed;
    });
    setLocalProducts(() => products);

    setTotal(total);
  }, [products]);
  useEffect(async () => {
    if (paymentStatus) {
      let req = await axios.post('http://localhost/payment', {
        clientData: {
          name,
          phone,
          email,
          paymentsNum,
        },
        products: products,
      });
      let detailsPanel = document.querySelector('.detailsPanel');
      detailsPanel.classList.add('d-none');
      console.log(req);
      setIframeUrl(req.data);
    }
  }, [paymentStatus]);
  const goNextStep = () => {
    if (products.length > 0) {
      setIsNext(true);
    }
  };

  useEffect(() => {
    setpaymentStatus(false);
  }, [isNext]);
  useEffect(() => {
    setIsNext(false);
  }, [openCart]);

  if (!openCart) {
    return null;
  }
  return (
    <div className="col-12 position-absolute start-0 top-100 position-relative shadow-lg border border-dark" style={{ zIndex: '9999' }}>
      <span
        className="position-absolute top-0 mt-2 ms-2 start-0 f30 fw-bold border rounded text-center pointer blueText"
        style={{ height: '25px', width: '25px', lineHeight: '15px', zIndex: 9999 }}
        onClick={setOpenCart}
      >
        x
      </span>
      <div className="col-12 bg-white position-absolute top-0 cartContainer d-flex flex-column align-items-center">
        {isNext ? (
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className="fs-3 text-muted mt-2">שניה לפני שממשיכים...</h1>
            <div className="col-12 d-flex flex-column align-items-center detailsPanel">
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <input
                  type="text"
                  className="form-control"
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  required
                  id="name"
                  onInput={(e) => setName(e.target.value)}
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  שם מלא*
                </span>
              </div>
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <input
                  type="email"
                  className="form-control"
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  pattern=".+@.+"
                  onInput={(e) => setEmail(e.target.value)}
                  id="email"
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  אימייל*
                </span>
              </div>
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <input
                  type="text"
                  className="form-control"
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  required
                  id="phone"
                  onInput={(e) => setPhone(e.target.value)}
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  טלפון
                </span>
              </div>
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <select className="form-select form-control" onChange={(e) => setPaymentsNum(e.target.value)}>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="4"> 4</option>
                  <option value="5"> 5</option>
                  <option value="6"> 6</option>
                  <option value="7"> 7</option>
                  <option value="8"> 8</option>
                  <option value="9"> 9</option>
                  <option value="10"> 10</option>
                  <option value="11"> 11</option>
                  <option value="12"> 12</option>
                </select>
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-6 col-6" id="basic-addon2">
                  מספר תשלומים
                </span>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-content-center">
              {iframeUrl ? (
                <div className="col-12 d-flex flex-column justify-content-center align-content-center">
                  <div className="col-12 d-flex flex-column justify-content-center align-content-center align-items-center">
                    <span className="">סכום לחיוב:{' '}₪{total}</span>
                    <span className="col-10 text-center">התשלום מאובטח ופרטי האשראי אינם נשמרים במערכת</span>
                  </div>

                  <iframe src={iframeUrl} className="col-12" style={{ minHeight: '35vh' }}></iframe>
                  <div className="col-10 d-flex mb-xxl-0 mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3 flex-row flex-wrap justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center align-items-center align-self-center ">
          <div className="col-xxl-3 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/ssl.svg" height="85" width="85" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/mc_symbol.svg" height="60" width="60" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/pci.svg" height="85" width="85" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/bit.svg" height="60" width="60" />
          </div>
          <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 p-1 itemsLine">
            <img src="../assets/icons/isracard.svg" height="60" width="60" />
          </div>
         
        </div>
                </div>
              ) : (
                <>
                  {' '}
                  <div className="col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-5 col-5 btn btn-primary" onClick={setPaymentDetails}>
                    המשך
                  </div>
                  <div class="spinner-border d-none" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          // second half
          <>
            {' '}
            <h1 className="">הסל שלי</h1>
            <hr className="w-90 blue" />
            <div className="col-12 d-flex flex-column align-items-center purContainer">
              {/* product */}
              {localProducts.map((el) => {
                return <Product price={el.price} productName={el.name} id={el.id} key={el.name} disptach={disptach} packName={el.pack} />;
              })}
            </div>
            <div className="col-12 d-flex flex-column align-items-center shadow-sm position-absolute bottom-0 h-25 mt-5">
              <hr className="w-90 blue" style={{ opacity: 0.3 }} />

              <div className="col-12 d-flex flex-row align-self-center justify-content-center">
                <span className="m-1">סך הכל</span>
                <span className="m-1">{total} ₪</span>
              </div>
              <div className="btn btn-success rounded-5 col-6" onClick={goNextStep}>
                המשך
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
