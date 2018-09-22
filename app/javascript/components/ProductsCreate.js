import React from 'react'
import Properties from './Properties'

class ProductsCreate extends React.Component {
    render () {
        return (
            <div className="form_container">
                <h1>Products</h1>
                <form>
                    <label>Name</label>
                    <input type="text"/>
                    <label>UPC</label>
                    <input type="text"/>
                    <label>Availiable On</label>
                    <input type="text" placeholder="mm/dd/yyyy"/>
                    <h1>Properties</h1>
                    <label>Property Name</label>
                    <input type="text"/>
                    <label>Property Value</label>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}

export default ProductsCreate