import React from 'react';
import ProductItem from './ProductItem';

// Contains reusable container for list of product items

const ProductContainer = props => {
  const products = props.products;

  return (
    <div className="container">
      {/* {mapping over products and creating groups of ul's displaying data} */}
      {products.map((product, index) => {
        return <ProductItem key={index} data={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
