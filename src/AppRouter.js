import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LegalInfo from "./pages/LegalInfo";
import Contracts from "./pages/Contracts";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import ForCommunity from "./pages/ForCommunity";
import Contact from "./pages/Contact";
import ContractLawyer from "./pages/ContractLawyer";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/legal" element={<LegalInfo />} />
        <Route exact path="/contracts" element={<Contracts />} />
        <Route exact path="/services" element={<ServicePage />} />
        <Route exact path="/contractpage" element={<ProductPage />} />
        <Route exact path="/community" element={<ForCommunity />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/" element={<ContractLawyer />} />

        {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
