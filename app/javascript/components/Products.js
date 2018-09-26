import React, { Fragment } from 'react';
import ProductContainer from './ProductContainer';

// contains search form as well as product list

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    if (e.target.name === 'search') {
      this.setState({ search: e.target.value });
    }
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
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            ref="search"
          />
        </form>
        <ProductContainer
          products={this.state.products}
          search={this.state.search}
        />
      </Fragment>
    );
  }
}

export default Products;
