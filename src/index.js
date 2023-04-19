import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllProducts } from './Contexts/Products';
import { Cart } from './Contexts/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllProducts>
      <Cart>
        <App />
      </Cart>
    </AllProducts>
  </React.StrictMode>
);
