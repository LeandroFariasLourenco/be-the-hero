import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Header from './pages/common/components/Header';
import "./hero-index.scss";

ReactDOM.render(<Header/> , document.querySelector('header'))
ReactDOM.render(<App/> , document.querySelector('main'))