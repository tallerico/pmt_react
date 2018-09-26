import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsCreate from './ProductsCreate';
import Products from './Products';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="flex_container">
          <Switch>
            <Route exact path="/" component={ProductsCreate} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
