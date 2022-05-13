import "./App.css";
import Navbar from "./components/navbar/navbar";
import TopSearchBar from "./components/topSearchBar/TopSearchBar";
import "./fonts.css";
import "./general.css";
import "./colors.css";
import AppRouter from "./AppRouter";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <TopSearchBar />
        <Navbar />
      <QuickContact />
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
