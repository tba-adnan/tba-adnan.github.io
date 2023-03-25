import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Maintwo from './components/main_two';
import Technologies from './components/Technologies';
import About from './components/About';
import reportWebVitals from './reportWebVitals';



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

const pages = ReactDOM.createRoot(document.getElementById("pages"));
pages.render(<App/>)

reportWebVitals();
