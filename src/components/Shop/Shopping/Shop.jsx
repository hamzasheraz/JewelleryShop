import React, { useState } from "react";
import Header from "../../Layout/Page-Header/Header";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import FilterSection from "./FilterSection";
import { useEffect } from "react";

import axios from 'axios';

function Shop() {
  console.log("chal para")
  const authToken = JSON.parse(localStorage.getItem('authtokens'));
  console.log(authToken.access)
  const [products,setproducts]=useState([])
  const [categories,setcategories]=useState("women")
  console.log(categories)

  // useEffect(()=>{
  //   axios.get(`http://127.0.0.1:8000/getproducts`,{
  //     headers:{
  //       'Authorization': `Bearer ${authToken?.access}`}
  //   })
  //   .then(res => {
  //     const data2= res.data;
  //     setproducts(data2)
  //     console.log(data2)
  //   })
  //   console.log("hello")
  // },[])
  
useEffect(()=> {
  getNotes()
}, [])
  
  let getNotes = async() =>{
    console.log('Bearer ' + String(authToken.access),"Senidng this")
    let response = await fetch('http://127.0.0.1:8000/getproducts', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authToken.access)
        }
    })
    let data = await response.json()
    if(response.status === 200){
       const data2= response.data;
            setproducts(data)
            console.log(data)
    }
    
}



  const modalProduct = {
    title: "GM Pendant, Basalt Grey",
    price: "$200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.",
    image: "images/shop/products/modal-product.jpg",
  };

  return (
    <>
    
      <Header title="Shop" page="shop" />
      <div className="container">
        <div className="row">
          <div className="col-md-3"> 
            {/* Left section (FilterSection) */}
            <FilterSection  setcat={setcategories} />
          </div>
          <div className="col-md-9">
             {/* Right section (Product items) */}
            <section className="products section">
              <div className="container">
                <div className="row">
                  {products?products.map((product, index) => (
                 
                    (product.category==categories)&&(
                    <ProductItem key={index} product={product} />
                    )
                  )):<p>not Avail</p>}
                </div>
              </div>
            </section>
          </div>
        </div> 
        </div>
            <ProductModal id="product-modal" product={modalProduct} />
    </>
  );
}

export default Shop;
