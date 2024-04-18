import React from 'react'
import ProductItem from '../Shop/Shopping/ProductItem'

const TrendyProduct = () => {
    const products = [
        {
          title: "Reef Boardsport",
          price: "$200",
          image: "src/images/shop/products/product-1.jpg",
          sale: true,
        },
        {
          title: "Rainbow Shoes",
          price: "$200",
          image: "src/images/shop/products/product-2.jpg",
          sale: false,
        },
        {
          title: "Strayhorn SP",
          price: "$230",
          image: "src/images/shop/products/product-3.jpg",
          sale: false,
        },
        {
          title: "Bradley Mid",
          price: "$200",
          image: "src/images/shop/products/product-4.jpg",
          sale: false,
        },
        // ... Add more product objects here
      ];
  return (
    <section className="products section bg-gray">
	<div className="container">
		<div className="row">
			<div className="title text-center">
				<h2>Trendy Products</h2>
			</div>
		</div>
		<div className="row">
        {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
    </div>
    </div>
    </section>
  )
}

export default TrendyProduct