import React, { useState } from "react";
import Header from "../../Layout/Page-Header/Header";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import FilterSection from "./FilterSection";
import axios from 'axios';

function Shop() {

  const [products,setproducts]=useState([])
  const [categories,setcategories]=useState("women")
  console.log(categories)

  useState(()=>{
    axios.get(`http://127.0.0.1:8000/getproducts`)
    .then(res => {
      const data2= res.data;
      setproducts(data2)
      console.log(data2)
    })
    console.log("hello")
  },[])

  // Updated data for products
  // const products = [
  //   {
  //     title: "Reef Boardsport",
  //     price: "$200",
  //     image: "src/images/shop/products/product-1.jpg",
  //     sale: true,
  //   },
  //   {
  //     title: "Rainbow Shoes",
  //     price: "$200",
  //     image: "src/images/shop/products/product-2.jpg",
  //     sale: false,
  //   },
  //   {
  //     title: "Strayhorn SP",
  //     price: "$230",
  //     image: "src/images/shop/products/product-3.jpg",
  //     sale: false,
  //   },
  //   {
  //     title: "Bradley Mid",
  //     price: "$200",
  //     image: "src/images/shop/products/product-4.jpg",
  //     sale: false,
  //   },
  //   // ... Add more product objects here
  // ];

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
                  {products.map((product, index) => (
                 
                    (product.category==categories)&&(
                    <ProductItem key={index} product={product} />
                    )
                  ))}
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
