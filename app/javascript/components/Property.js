import React from 'react';

const Property = props => {
  return (
    <li>
      {props.property.name}: {props.property.value}
    </li>
  );
};

export default Property;
