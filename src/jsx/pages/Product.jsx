import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetailInfo from '../components/ui/product/ProductDetailInfo';
import ProductExtraInfo from '../components/ui/product/ProductExtraInfo';
import ProductHeader from '../components/ui/product/ProductHeader';
import Review from '../components/ui/Review';
import ProductBottomButton from '../components/ui/product/ProductBottomButton';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function Product() {
   const [productData, setProductData] = useState();

   const pathname = useParams();
   console.log(pathname.productId)

   useEffect(()=>{
      console.log(pathname)
      axios.get(`http://10.10.10.78:9000/api/pdtBoard/detail/${pathname.productId}`)
      .then(Response => {
         console.log(Response.data);
         setProductData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })

   }, [])

    return ( 
      <>
         {
            productData &&
               <div>
                  <Header />
                  <ProductHeader productData = {productData} />
                  <ProductDetailInfo productData = {productData} />
                  <Review />
                  <ProductExtraInfo />
                  <ProductBottomButton productData = {productData} />
                  <Footer />
               </div>
         }
      </>
   );
}

export default Product;