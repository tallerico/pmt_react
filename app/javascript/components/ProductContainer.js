import React from 'react';
import ProductItem from './ProductItem';

const ProductContainer = props => {
  const products = props.products;

  return (
    <div className="container">
      {products.map((product, index) => {
        return <ProductItem key={index} data={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
