import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartpageProvider from './context/CartpageProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartpageProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartpageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
