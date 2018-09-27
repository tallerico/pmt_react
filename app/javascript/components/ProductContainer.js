import React from 'react';
import ProductItem from './ProductItem';

// Contains reusable container for list of product items

const ProductContainer = props => {
  const products = props.products;

  return (
    <div className="prod">
      {/* {mapping over products and creating groups of ul's displaying data} */}
      {products.map((product, index) => {
        return <ProductItem key={index} data={product} search={props.search} />;
      })}
    </div>
  );
};

export default ProductContainer;
