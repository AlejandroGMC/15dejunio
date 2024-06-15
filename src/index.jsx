import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hola from './componente1';
import Hola2 from './componente2';
import Hola3 from './componente3';
import Hola4 from './componente4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Hola/>
    <Hola2/>
    <Hola3/>
    <Hola4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
