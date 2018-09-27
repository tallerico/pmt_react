import React from 'react';
import Property from './Property';

const Properties = props => {
  const property = props.properties;

  if (property.length === 0) {
    return <h3>No Properties Added</h3>;
  } else {
    /*Rendering images*/
    return (
      <div className="properties_container">
        <h3>Properties Added</h3>
        {property.map((property, index) => (
          <Property key={index.toString()} property={property} />
        ))}
      </div>
    );
  }
};

export default Properties;
