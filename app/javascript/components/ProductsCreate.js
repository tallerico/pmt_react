import React, { Fragment } from 'react';
import Properties from './Properties';
import MessageContainer from './MessageContainer';

class ProductsCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      upc: '',
      availableOn: '',
      propertyName: '',
      propertyValue: '',
      properties: [],
      error: false,
      saved: false
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
    if (e.target.name === 'propertyName') {
      this.setState({ propertyName: e.target.value });
    }
    if (e.target.name === 'propertyValue') {
      this.setState({ propertyValue: e.target.value });
    }
  }

  //sends data to POST route.
  submitData = () => {
    fetch(`/send_data`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        upc: this.state.upc,
        availableOn: this.state.availableOn,
        properties: this.state.properties
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(response => {
      // if any errors set error state to true which brings op error messsage
      if (response.status !== 204) {
        this.setState({ error: true });
        return;
      } else {
        // if response is ok clear state and inputs
        this.refs.name.value = '';
        this.refs.upc.value = '';
        this.refs.date.value = '';
        this.setState({
          name: '',
          upc: '',
          availableOn: '',
          propertyName: '',
          propertyValue: '',
          properties: [],
          error: false,
          saved: true
        });
        // show saved message for 5 seconds
        setTimeout(() => {
          this.setState({ saved: false });
        }, 5000);
      }

      return response.json;
    });
  };

  // click handler for saveing of the data and adding of properties
  clickHandler = e => {
    e.preventDefault();
    if (e.target.id === 'save') {
      this.submitData();
    }
    if (e.target.id === 'properties') {
      this.updateProperties();
    }
  };

  //updates properties array with data from inputs
  updateProperties = e => {
    const propertyObj = {
      name: this.state.propertyName,
      value: this.state.propertyValue
    };
    //takes a copie of current state and then concats additional properties added by user
    this.setState({ properties: this.state.properties.concat(propertyObj) });
    this.setState({ propertyName: '' });
    this.setState({ propertyValue: '' });
    this.refs.propertyName.value = '';
    this.refs.propertyValue.value = '';
  };

  render() {
    return (
      <Fragment>
        <MessageContainer
          properties={this.state.error}
          saved={this.state.saved}
        />
        <div className="form_container">
          <h1>Products</h1>
          <form>
            <label>Name</label>
            <input
              type="text"
              ref="name"
              name="name"
              onChange={this.handleChange}
            />
            <label>UPC</label>
            <input
              type="text"
              ref="upc"
              name="upc"
              onChange={this.handleChange}
            />
            <label>Availiable On</label>
            <input
              type="text"
              ref="date"
              name="date"
              placeholder="mm/dd/yyyy"
              onChange={this.handleChange}
            />
            <h1>Properties</h1>
            <div className="property_container">
              <label>Property Name</label>
              <input
                type="text"
                name="propertyName"
                onChange={this.handleChange}
                ref="propertyName"
              />
              <label>Property Value</label>
              <input
                type="text"
                name="propertyValue"
                onChange={this.handleChange}
                ref="propertyValue"
              />
            </div>
            <button id="properties" onClick={this.clickHandler}>
              Add Properties
            </button>
            <button id="save" onClick={this.clickHandler}>
              Save
            </button>
          </form>
          <Properties properties={this.state.properties} />
        </div>
      </Fragment>
    );
  }
}

export default ProductsCreate;
