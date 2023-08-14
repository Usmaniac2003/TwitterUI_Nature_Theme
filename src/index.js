import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyContextProvider } from './StateManage';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MyContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyContextProvider>
  </Router>
);

