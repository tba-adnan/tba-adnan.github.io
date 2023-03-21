import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Main from './pages/main';
import Maintwo from './pages/main_two';
import Technologies from './pages/Technologies';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';


export default function Router() {
    return (
  <div></div>
    );
  }




const router = ReactDOM.createRoot(document.getElementById("router"));
router.render(<Router/>)

const navbar = ReactDOM.createRoot(document.getElementById("header"));
navbar.render(<Header/>)

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(<Main/>)

const technologies = ReactDOM.createRoot(document.getElementById('technologies'));
technologies.render(<Technologies/>)

const main_two = ReactDOM.createRoot(document.getElementById('maintwo'))
main_two.render(<Maintwo/>)

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer/>)


reportWebVitals();
