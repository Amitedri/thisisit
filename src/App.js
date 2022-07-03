import './App.css';
import Navbar from './components/navbar/navbar';
import TopSearchBar from './components/topSearchBar/TopSearchBar';
import './fonts.css';
import './general.css';
import './colors.css';
import AppRouter from './AppRouter';
import QuickContact from './components/QuickContact';
import Footer from './components/Footer';
import Notifications from './components/Notification';
import { useState } from 'react';
function App() {
  const [notificationState, setNotificationState] = useState(0);

  const setNotificationNum = (value) => {
    setNotificationState(value);
  };
  return (
    <div className="App">
      <Notifications state={notificationState} />
      <TopSearchBar />
      <Navbar />
      <QuickContact />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
