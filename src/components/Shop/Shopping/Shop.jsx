import React, { useState } from "react";
import Header from "../../Layout/Page-Header/Header";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";

function Shop() {
  const authToken = JSON.parse(localStorage.getItem("authtokens"));
  const product = useSelector((state) => state.product);
  const [categories, setcategories] = useState("women");

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
            <FilterSection setcat={setcategories} />
          </div>
          <div className="col-md-9">
            {/* Right section (Product items) */}
            <section className="products section">
              <div className="container">
                <div className="row">
                  {product.data ? (
                    product.data.map(
                      (product, index) =>
                        product.category == categories && (
                          <ProductItem key={index} product={product} />
                        )
                    )
                  ) : (
                    <p>not Avail</p>
                  )}
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
