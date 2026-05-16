import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home';
import Broadcast from './Pages/Broadcast/Broadcast';
import Chatbot from './Pages/Chatbot/Chatbot';
import Crm from './Pages/Crm/Crm';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import ContactUs from './Pages/ContactUs';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
