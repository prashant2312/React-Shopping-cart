import React from 'react';
import ReactDOM from 'react-dom';
  
import './index.css';
// import './App.css';



import { BrowserRouter } from 'react-router-dom'
import App from './App';

// import Log from './test/Signup.jsx';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

