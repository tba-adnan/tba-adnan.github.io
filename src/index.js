import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Layout from './pages/Layout';
import Notfound from './pages/Notfound'
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/News-letter';


function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news-letter" element={<Newsletter />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();