import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllProducts } from './Contexts/Products';
   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllProducts>
      <App />
    </AllProducts>
  </React.StrictMode>
);
