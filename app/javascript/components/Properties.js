import React from 'react';

class Properties extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="property_container">
        <label>Property Name</label>
        <input type="text" name="propertyName" />
        <label>Property Value</label>
        <input type="text" name="propertyValue" />
      </div>
    );
  }
}

export default Properties;
