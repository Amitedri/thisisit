import './App.css';
import Navbar from './components/navbar/navbar';
import TopSearchBar from './components/topSearchBar/TopSearchBar';
import './fonts.css';
import './general.css';
import './colors.css';
import AppRouter from './AppRouter';
import QuickContact from './components/QuickContact';
import Notifications from './components/Notification';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setShowCart } from './Slice';
import { useDispatch } from 'react-redux';

function App() {
  const [transactionData, setTransactionData] = useState({});
  const disptach = useDispatch();

  const setPurchaseData = (value) => {
    setTransactionData(value);
    return;
  };
  useEffect(() => {
    let mashulam = 'https://sandbox.meshulam.co.il';
    window.addEventListener('message', async (result) => {
      if (result.origin === mashulam) {
        console.log(result.data);

        // disptach(setShowCart(false));

        const res = result.data.action;

        if (res === 'close') {
          let url = encodeURI('https://www.ceco.co.il/paymentres/failed');
          window.location = url;
          disptach(setShowCart(false))
        }
        if (res === 'payment' && result.data.status == 1) {
          let url = encodeURI('https://www.ceco.co.il/paymentres/success');
          let productsReq = await axios.post('/paymentdone', transactionData);
          disptach(setShowCart(false))
          window.location = url;
        }
      }
    });

    return () => {
      window.removeEventListener('message', () => {});
    };
  }, [transactionData]);
  return (
    <div className="App">
      <TopSearchBar />
      <Navbar setPurchaseData={setPurchaseData} />
      <Notifications />
      <QuickContact />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
