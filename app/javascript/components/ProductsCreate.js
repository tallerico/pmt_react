import React from 'react';
import Properties from './Properties';

class ProductsCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      upc: '',
      availableOn: '',
      properties: [{ name: '', value: '' }],
      inputs: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === 'upc') {
      this.setState({ upc: e.target.value });
    }
    if (e.target.name === 'date') {
      this.setState({ availableOn: e.target.value });
    }
  }

  submitData = () => {
    fetch(`/send_data`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        upc: this.state.upc,
        availableOn: this.state.availableOn
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        return response.json;
      })
      .then(data => {
        console.log(data);
      });
  };

  clickHandler = e => {
    e.preventDefault();
    this.submitData();
  };

  appendInput = e => {
    e.preventDefault();
    const newInput = `input-${this.state.inputs.length}`;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
  };

  updateProperties(name, value) {
    propertyObj = {
      name: name,
      value: value
    };
    this.setState(properties.push(propertyObj));
  }

  render() {
    return (
      <div className="form_container">
        <h1>Products</h1>
        <form>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>UPC</label>
          <input type="text" name="upc" onChange={this.handleChange} />
          <label>Availiable On</label>
          <input
            type="text"
            name="date"
            placeholder="mm/dd/yyyy"
            onChange={this.handleChange}
          />
          <h1>Properties</h1>
          {this.state.inputs.map(input => (
            <Properties key={input} />
          ))}
          <button onClick={this.appendInput}>Add Properties</button>
          <button onClick={this.clickHandler}>Save</button>
        </form>
      </div>
    );
  }
}

export default ProductsCreate;
