import React, { Fragment } from 'react';
import ProductContainer from './ProductContainer';
import './stylesheets/main.css';

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

  // handles change in search input
  handleChange(e) {
    console.log(e);
    if (e.target.name === 'search') {
      this.setState({ search: e.target.value });
    }
  }

  //getting data on mount and setting to state

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
        <div className="search">
          <h1>Products</h1>
          <form>
            <input
              type="text"
              name="search"
              onChange={this.handleChange}
              ref="search"
              placeholder="Search..."
            />
          </form>
        </div>
        <ProductContainer
          products={this.state.products}
          search={this.state.search}
        />
      </Fragment>
    );
  }
}

export default Products;
