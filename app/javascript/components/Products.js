import React, { Fragment } from 'react';

class Products extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('/get_data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        return response.json();
      })
      .then(data => console.log(data));
  }

  render() {
    return (
      <Fragment>
        <h1>Products</h1>
        <form>
          <input type="text" />
        </form>
        <div className="container">
          <ul>
            <li>Items</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Products;
