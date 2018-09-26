import React, { Fragment } from 'react';
import ProductContainer from './ProductContainer';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
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
      .then(data => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    return (
      <Fragment>
        <h1>Products</h1>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
        <ProductContainer products={this.state.products} />
      </Fragment>
    );
  }
}

export default Products;
