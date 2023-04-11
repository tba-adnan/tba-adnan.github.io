import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 
import Layout from './pages/Layout';
import Notfound from './pages/Notfound'
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/News-letter';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router basename="">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news-letter" element={<Newsletter />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();