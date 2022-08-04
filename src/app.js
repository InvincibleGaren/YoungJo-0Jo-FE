import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";
import './css/mystyle.css'
import UnderNewService from "./jsx/components/UnderNewService";
import Login from "./jsx/pages/LogIn_T";
import LogIn from "./jsx/pages/LogIn_T";
import Review from "./jsx/pages/Review-T";
import MyState from "./jsx/pages/MyState-T";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/my" element={<MyState/>} />
      </Routes>
      {/* 브라우저 라우터 안에 넣기! */}
      <UnderNewService/> {/* path를 따로 설정안하면 기본값마냥 어디에든 뜸*/}
    </BrowserRouter>
    
  );
}

export default App;