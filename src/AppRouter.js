import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LegalInfo from './pages/LegalInfo';
import Contracts from './pages/Contracts';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ForCommunity from './pages/ForCommunity';
import Contact from './pages/Contact';
import ContractLawyer from './pages/ContractLawyer';
import Services from './pages/Services';
import Terms from './pages/Terms';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/legal" element={<LegalInfo />} />
        <Route exact path="/contracts" element={<Contracts />} />
        <Route exact path="/contracts/:cat" element={<Contracts />} />
        <Route exact path="/contract/:id" element={<ProductPage />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/service/:id" element={<ServicePage />} />
        <Route exact path="/community" element={<ForCommunity />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/" element={<ContractLawyer />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
