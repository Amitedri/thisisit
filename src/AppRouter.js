import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LegalInfo from './pages/LegalInfo';
import Contracts from './pages/Contracts';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ForCommunity from './pages/ForCommunity';
import Contact from './pages/Contact';
import ContractLawyer from './pages/contractLawyer';
import Services from './pages/Services';
import Terms from './pages/Terms';
import servicesList from './Data/Services';
import previewContracts from './Data/ContractExport';
import DocViewer, { PDFRenderer } from 'react-doc-viewer';
const Doc = () => {
  const docs = [{ uri: require('./localPdf.pdf') }];

  return (
    <div className="col-12">
      <h1>Sample react-doc-viewer</h1>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/success" element={<div>success</div>} />
        <Route exact path="/failed" element={<div>failed</div>} />
        <Route exact path="/legal" element={<LegalInfo />} />
        <Route exact path="/contracts" element={<Contracts servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contracts/:cat" element={<Contracts servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contract/:id" element={<ProductPage servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/services" element={<Services servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/service/:id" element={<ServicePage servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/community" element={<ForCommunity servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/contactus" element={<Contact servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/" element={<ContractLawyer servicesList={servicesList} previewContracts={previewContracts} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
