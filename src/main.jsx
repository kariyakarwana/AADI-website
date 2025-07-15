import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Enquiry from './components/pages/Enquiry.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<App />} />
        
        {/* Route for enquiry page in a separate tab */}
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
