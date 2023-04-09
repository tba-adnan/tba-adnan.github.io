import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Maintwo from './components/main_two';
import Technologies from './components/Technologies';
import reportWebVitals from './reportWebVitals';


import Layout from './pages/Layout';
import Notfound from './pages/Notfound'
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/News-letter';


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Home />} /> */}
          <Route path="about" element={< About/>} />
            <Route path="error" element={<Notfound />} />
            <Route path="news-letter" element={<Newsletter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);



reportWebVitals();
