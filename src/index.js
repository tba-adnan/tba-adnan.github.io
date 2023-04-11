import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/News-letter';
import NotFound from './pages/NotFound';




export default function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-letter" element={<Newsletter />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();