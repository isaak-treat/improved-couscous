import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
         Routes,
         Route 
} from "react-router-dom";

import './styles/index.css';

import App from './components/App';
import Friend from './components/Friend';
import Recruiter from './components/Recruiter';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='friend' element={<Friend />} />
        <Route path='recruiter' element={<Recruiter />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
