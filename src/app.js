import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./jsx/pages/Home";
import Product from "./jsx/pages/Product";
import './css/mystyle.css'

import UnderNewService from "./jsx/components/UnderNewService";
import LogIn from "./jsx/pages/LogIn";
import HotBrand from "./jsx/components/HotBrand";
import DepartmentStoreBestItem from "./jsx/components/DepartmentStoreBestItem";
// import Test from "./jsx/Test";
// import MainCate from "./jsx/pages/MainCate";
import CtgL from "./jsx/components/CtgL";

import LogIn from "./jsx/pages/LogIn";

import CategoryMenu from "./jsx/components/ui/CategoryMenu";
import CartEmpty from "./jsx/components/ui/CartEmpty";

import SimpleJoin from "./jsx/pages/SimpleJoin";
import JoinForm from "./jsx/pages/JoinForm";
import ScrollToTop from "./jsx/function/ScrollTop";
import AllSearch from "./jsx/pages/AllSearch";



function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} >
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/login" element={<LogIn />} />

        <Route path="/categorymenu" element={<CategoryMenu />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cartempty" element={<CartEmpty />} />

        <Route path="/join/simplejoin" element={<SimpleJoin />} />
        <Route path="/join/joinform" element={<JoinForm />} />
        <Route path="/allsearch" element={<AllSearch />} />
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/UNS" element={<UnderNewService/>} />
        <Route path="/HotBrand" element={<HotBrand/>} />
        <Route path="/DepartmentStoreBestItem" element={<DepartmentStoreBestItem/>}/>
        <Route path="/ctgl" element={<CtgL/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;