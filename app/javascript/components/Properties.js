import React, { Fragment } from 'react'


class Properties extends React.Component {
    render () {
        return (
            <Fragment>
                <label>Property Name</label>
                <input type="text"/>
                <label>Property Value</label>
                <input type="text"/>
            </Fragment>
        )
    }
}

export default Properties