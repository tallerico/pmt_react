import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsCreate from './ProductsCreate'
import Products from './Products'

class App extends React.Component {
    render () {
        return (
            <div className="flex_container">
                <Switch>
                    <Route exact path="/" component={ProductsCreate}/>
                    <Route exact path="/products" component={Products}/>
                </Switch>
            </div>
        )
    }
}

export default App