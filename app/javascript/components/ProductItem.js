import React from 'react';

const ProductItem = props => {
  console.log(props);
  const item = props.data;
  return (
    <ul className="item_list">
      <li>Product Name: {item.name}</li>
      <li>UPC: {item.upc}</li>
      <li>Available On: {item.available_on}</li>
      <li>
        {item.properties.map(properties => {
          return `(${properties.name}, ${properties.value})`;
        })}
      </li>
    </ul>
  );
};

export default ProductItem;
