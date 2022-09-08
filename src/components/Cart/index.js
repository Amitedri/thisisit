import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setProducts, removeProduct, setShowCart, setClientData } from '../../Slice';
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
        <img className="rounded figure-img" src={`../assets/img/contracts/${productName}.jpg`} height="150" width="150" />
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

const Cart = ({ setPurchaseData }) => {
  const [openCart, setOpenCart] = useState(false);
  const showCartSelector = useSelector((state) => state.prods.showCart);
  const disptach = useDispatch();
  const products = useSelector((state) => state.prods.products) || [];
  const [localProducts, setLocalProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isNext, setIsNext] = useState(0);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentsNum, setPaymentsNum] = useState(1);
  const [iframeUrl, setIframeUrl] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setpaymentStatus] = useState(false);
  const [lastNumOfProducts, setLastNumOfProducts] = useState(0);

  const setPaymentDetails = (e) => {
    console.log('click');
    let dataFormInput = document.querySelectorAll('.dataFormInput');
    let nameSplit = name.split(' ');
    if (nameSplit.length == 1 || nameSplit.length == 0) {
      setpaymentStatus((prev) => false);

      dataFormInput[0].classList.add('border', 'border-danger');
      return;
    } else {
      dataFormInput[0].classList.remove('border', 'border-danger');
    }
    let isEmailOk = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isEmailOk) {
      dataFormInput[1].classList.add('border', 'border-danger');
      setpaymentStatus((prev) => false);

      return;
    } else {
      dataFormInput[1].classList.remove('border', 'border-danger');
    }
    if (!phone || phone.length != 10) {
      dataFormInput[2].classList.add('border', 'border-danger');
      setpaymentStatus((prev) => false);

      return;
    } else {
      dataFormInput[2].classList.remove('border', 'border-danger');
    }
    let paymentMethodBtn = document.querySelectorAll('.paymentMethodBtn');
    if (!paymentMethod) {
      paymentMethodBtn.forEach((el) => el.classList.add('border-danger'));
    }
    setpaymentStatus((prev) => true);
  };

  useEffect(() => {
    let total = 0;
    products.forEach((el) => {
      let parsed = parseInt(el.price);
      total += parsed;
    });
    console.log(total);
    window.scrollTo(0, 0);
    setTotal(() => total);
    setLocalProducts(() => products);
  }, [products]);

  useEffect(() => {
    let paymentMethodBtn = document.querySelectorAll('.paymentMethodBtn');
    if (paymentMethod === 'card') {
      paymentMethodBtn[0].classList.add('border', 'border-5', 'shadow-sm', 'p-3', 'yellowBorder', 'rounded');
      paymentMethodBtn[1].classList.remove('border', 'border-5', 'shadow-sm', 'p-3', 'yellowBorder', 'rounded');
      paymentMethodBtn.forEach((el) => el.classList.remove('border-danger'));
    }
    if (paymentMethod === 'bit') {
      paymentMethodBtn[1].classList.add('border', 'border-5', 'shadow-sm', 'p-3', 'yellowBorder', 'rounded');
      paymentMethodBtn[0].classList.remove('border', 'border-5', 'shadow-sm', 'p-3', 'yellowBorder', 'rounded');
      paymentMethodBtn.forEach((el) => el.classList.remove('border-danger'));
    }
  }, [paymentMethod]);

  useEffect(() => {
    console.log('showCartSelector', showCartSelector);
    setOpenCart(() => showCartSelector);
  }, [showCartSelector]);

  useEffect(() => {
    if (!openCart) {
      setIframeUrl('');
    }
  }, [openCart]);

  useEffect(async () => {
    if (paymentStatus) {
      disptach(
        setClientData({
          name,
          phone,
          email,
        })
      );
      let req = await axios.post(
        '/payment',
        {
          clientData: {
            name,
            phone,
            email,
            paymentMethod,
            paymentsNum,
          },
          products: products,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      let detailsPanel = document.querySelector('.detailsPanel');
      detailsPanel.classList.add('d-none');
      console.log(req);
      setIframeUrl(req.data.url);
      setPurchaseData(req.data);
    }
  }, [paymentStatus]);

  useEffect(() => {
    setpaymentStatus(false);
  }, [isNext]);

  useEffect(() => {
    if (!openCart) {
      setIsNext(false);
    }
  }, [openCart]);

  if (!openCart) {
    return null;
  }
  const goNextStep = () => {
    if (products.length > 0) {
      setIsNext(true);
    }
  };

  const closeCart = () => {
    disptach(setShowCart(false));
  };
  const CardPaymentFrame = ({ iframeUrl }) => {
    if (!iframeUrl) {
      return null;
    }
    return (
      <div className="col-12 d-flex flex-column justify-content-center align-content-center align-items-center">
        <div className="col-12 d-flex flex-column justify-content-center align-content-center align-items-center">
          <span className="">סכום לחיוב: ₪{total}</span>
          <span className="col-10 text-center">התשלום מאובטח ופרטי האשראי אינם נשמרים במערכת</span>
        </div>
        <div className="col-12 align-self-center" style={{ height: '500px' }}>
          <iframe src={iframeUrl} style={{ height: '100%', margin: '0 auto', border: 'unset', display: 'block', minWidth: '100%' }}></iframe>
        </div>
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
    );
  };
  const LoadingButton = ({ text, setPaymentDetails, isNext, iframeUrl }) => {
    if (!isNext || iframeUrl) {
      return null;
    }
    return (
      <>
        <div className="col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-5 col-5 btn btn-primary m-2" onClick={setPaymentDetails}>
          {text}
        </div>
        <div class="spinner-border d-none" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </>
    );
  };
  const payments = (total) => {
    if (total < 1000) {
      return <option value="1">1</option>;
    }
    if (total > 1000 && total <= 1500) {
      return <option value="2">2</option>;
    }
    if (total > 1500) {
      return <option value="3">3</option>;
    }
  };
  return (
    <div className="col-12 position-absolute start-0 top-100 position-relative shadow-lg border border-dark" style={{ zIndex: '9999' }}>
      <span
        className="position-absolute top-0 mt-2 ms-2 start-0 f30 fw-bold border rounded text-center pointer blueText"
        style={{ height: '25px', width: '25px', lineHeight: '15px', zIndex: 9999 }}
        onClick={closeCart}
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
                  className="form-control dataFormInput "
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  required
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  שם מלא*
                </span>
              </div>
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <input
                  type="email"
                  className="form-control dataFormInput "
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  pattern=".+@.+"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  אימייל*
                </span>
              </div>
              <div className="mb-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 d-flex flex-row-reverse">
                <input
                  type="text"
                  className="form-control dataFormInput "
                  placeholder="הקלד כאן"
                  aria-label="הקלד כאן"
                  aria-describedby="basic-addon2"
                  required
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="input-group-text col-xxl-2 col-xl-2 col-md-3 col-lg-3 col-sm-4 col-4" id="basic-addon2">
                  טלפון*
                </span>
              </div>
              <select className="form-select col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10">
                <option value="1">מספר תשלומים</option>
                {payments(total)}
              </select>
              <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                <h1 className="">בחירת אמצעי תשלום</h1>
                <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-content-center flex-wrap">
                  <div
                    onClick={() => setPaymentMethod(() => 'card')}
                    className="col-5 border  d-flex justify-content-center align-items-center shadow-sm m-2 paymentMethodBtn"
                    style={{ height: '200px' }}
                  >
                    <img height="75" width="75" className="" src="../assets/icons/card.svg"></img>
                  </div>
                  <div
                    onClick={() => setPaymentMethod(() => 'bit')}
                    className="col-5 border  d-flex justify-content-center align-items-center shadow-sm m-2 paymentMethodBtn"
                    style={{ height: '200px' }}
                  >
                    <img height="75" width="75" className="" src="../assets/icons/bit.svg"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-content-center">
              <CardPaymentFrame iframeUrl={iframeUrl} />
              <LoadingButton text="המשך" setPaymentDetails={setPaymentDetails} isNext={isNext} iframeUrl={iframeUrl} />
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
            <div className="col-12 d-flex flex-column align-items-center shadow-sm">
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
