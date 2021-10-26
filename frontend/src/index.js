import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MobiGood from './MobiGood';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MobiGood />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
