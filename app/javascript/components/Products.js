import React, { Fragment } from 'react';
import ProductContainer from './ProductContainer';

// contains search form as well as product list

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  //getting data on mount

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
