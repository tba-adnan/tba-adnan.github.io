import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Main from './components/main';
import Technologies from './components/Technologies';
import reportWebVitals from './reportWebVitals';



const navbar = ReactDOM.createRoot(document.getElementById("header"));
navbar.render(<Header/>)

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(<Main/>)

const maintwo = ReactDOM.createRoot(document.getElementById('maintwo'));
maintwo.render(<Technologies/>)


reportWebVitals();
