import React from 'react';
import Properties from './Properties';

const MessageContainer = props => {
  if (props.properties) {
    return (
      <div className="error_container">
        <h4>Error, please verify the following</h4>
        <ul>
          <li>Please check that "Name" is a unique product name.</li>
          <li>
            Upc must be either 10,12 or 13 characters long, numeric only and
            unique.
          </li>
          <li>Date must be in the future.</li>
          <li>Property name must be unique</li>
        </ul>
      </div>
    );
  }
  if (props.saved) {
    return (
      <div className="error_container">
        <h4>Saved!</h4>
      </div>
    );
  }

  return null;
};

export default MessageContainer;
