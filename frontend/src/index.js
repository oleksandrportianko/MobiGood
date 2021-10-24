import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MobiGood from './MobiGood';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MobiGood />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
