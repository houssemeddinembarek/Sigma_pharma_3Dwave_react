import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouteConfig from './router/RouteConfig';

ReactDOM.render(
  <React.StrictMode>
    <RouteConfig />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
