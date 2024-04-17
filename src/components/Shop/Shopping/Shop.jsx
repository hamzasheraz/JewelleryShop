import React from 'react';
import Header from '../../Layout/Page-Header/Header';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';

function Shop() {
  // Sample data for products and modal
  const products = [
    {
      title: 'Reef Boardsport',
      price: '$200',
      image: '/src/images/shop/products/product-1.jpg',
      sale: true,
    },
    // ... Add more product objects here
  ];

  const modalProduct = {
    title: 'GM Pendant, Basalt Grey',
    price: '$200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.',
    image: '/src/images/shop/products/modal-product.jpg',
  };
  return (
    <>
      <Header title="Shop" page='shop' />
      <section className="products section">
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <ProductModal id="product-modal" product={modalProduct} />
    </>
  );
}

export default Shop;

