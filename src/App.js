import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home';
import Broadcast from './Pages/Broadcast/Broadcast';
import Chatbot from './Pages/Chatbot/Chatbot';
import Crm from './Pages/Crm/Crm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/crm" element={<Crm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
