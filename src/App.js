import './App.css';
import './fonts.css';
import './general.css';
import './colors.css';
import Navbar from './components/navbar/navbar';
import TopSearchBar from './components/topSearchBar/TopSearchBar';

import AppRouter from './AppRouter';
import QuickContact from './components/QuickContact';
import Notifications from './components/Notification';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setProducts, setShowCart } from './Slice';
import { useDispatch } from 'react-redux';
import TermsModal from './components/TermsModal';

function App() {
  const [transactionData, setTransactionData] = useState({});
  const [isPaymentOk, setisPaymentOk] = useState(false);

  const disptach = useDispatch();

  const setPurchaseData = (value) => {
    setTransactionData(value);
    return;
  };
  
  useEffect(async () => {
    if (isPaymentOk) {
      let url = encodeURI('https://www.ceco.co.il/paymentres/success');
      let productsReq = await axios.post('http://localhost/paymentdone', transactionData);
      console.log('productsReq', productsReq);
      console.log('isPaymentOk', isPaymentOk);
      disptach(setShowCart(false));
      disptach(setProducts([]))
      setTimeout(() => {
      window.location.replace(url);
        
      }, 0);
    }
  }, [isPaymentOk]);

  useEffect(() => {
    let mashulam = 'https://sandbox.meshulam.co.il';
    window.addEventListener('message', async (result) => {
      if (result.origin === mashulam) {
        console.log(result.data);

        const res = result.data.action;

        if (res === 'close') {
          console.log(' on close');
          let url = encodeURI('https://www.ceco.co.il/paymentres/failed');
          window.location = url;
          disptach(setShowCart(false));
          setisPaymentOk(false);
        }
        if (res === 'payment' && result.data.status == 1) {
          console.log('on payment');
          setisPaymentOk(true);
        }
      }
    });

    return () => {
      window.removeEventListener('message', () => {});
    };
  }, []);

  return (
    <div className="App">
      <TopSearchBar />
      <Navbar setPurchaseData={setPurchaseData} />
      <Notifications />
      <TermsModal />
      <QuickContact />
      <div className="col-2 position-fixed end-0" style={{ height: '50px', bottom: "150px", zIndex: '9999' }}>
        <a className="d-flex" href="https://api.whatsapp.com/send?phone=972508081119" target="_blank">
          <img
            src={'../assets/icons/wha.png'}
            height={'75'}
            width={'75'}
            className="p-2 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none pointer"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </a>
        <a className="d-flex" href="tel:0508081119" target="_blank">
          <img
            src={'../assets/icons/call.svg'}
            height={'75'}
            width={'75'}
            className="p-2 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none pointer"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </a>
      </div>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
