import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Det from './component/employee';
import Edd from './component/editEmployee';
import {BrowserRouter,Routes,Route}from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  <Routes>
<Route path='/' element=   {<Det/>}/>
<Route path ="/Add" element={<App/>}/>
<Route path='/Edd' element={<Edd/>}/>
  </Routes>
  
  </BrowserRouter>
  
  </div>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
