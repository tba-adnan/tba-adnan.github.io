import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Notfound from './pages/Notfound'
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/News-letter';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={< About/>} />
          <Route path="error" element={<Notfound />} />
          <Route path="news-letter" element={<Newsletter />} />
        </Route>
      </Routes>
    </Router>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();