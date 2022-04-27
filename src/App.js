import "./App.css";
import Navbar from "./components/navbar/navbar";
import TopSearchBar from "./components/topSearchBar/TopSearchBar";
import './fonts.css'
import './general.css'
import './colors.css'
import AppRouter from "./AppRouter";


function App() {
  return <div className="App">
    <TopSearchBar/>
    <Navbar/>
    <AppRouter/>
  </div>;
}

export default App;
