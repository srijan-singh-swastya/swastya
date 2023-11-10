import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileCheck from './AllPages/General/MobileCheck/MobileCheck';
import store from './ReduxState/store.js';
import { Provider } from 'react-redux';

import ReviewInvoicePage1 from './AllPages/KitInventory/ReviewInvoicePage1/ReviewInvoicePage1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MobileCheck />
{/* <ReviewInvoicePage1/> */}
      <App />
    </Provider>
  </React.StrictMode>
);
