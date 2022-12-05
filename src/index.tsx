import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './css/index.css';
import './css/book-item.css';
import './css/header.css';
import './css/main-page.css';
import './css/footer.css';
import './css/subscribe-form.css';
import './css/page-nav.css';
import './css/book-page.css';
import './css/cart-page.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>
);
