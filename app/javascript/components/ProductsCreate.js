import React from 'react'
import Properties from './Properties'

class ProductsCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            upc: '',
            availableOn: ''
        }
    }

    render () {
        return (
            <div className="form_container">
                <h1>Products</h1>
                <form>
                    <label>Name</label>
                    <input type="text" value="this.state.name"/>
                    <label>UPC</label>
                    <input type="text" value="this.state.upc"/>
                    <label>Availiable On</label>
                    <input type="text" placeholder="mm/dd/yyyy" value="this.state.date"/>
                    <h1>Properties</h1>
                    <Properties/>
                </form>
            </div>
        )
    }
}

export default ProductsCreate