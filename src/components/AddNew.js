import React, { Component } from 'react';
import axios from 'axios';
import './AddNew.css'

class AddNew extends Component {
    constructor() {
        super();
        this.state = {
            newName: '',
            newPrice: 0,
            newImg: ''
        }
    }
    createProduct() {

    }
    updateInputs(val, which) {

    }
    render() {
        return(
            <div className="AddNew">
                <div className="add-new-field">
                    Image URL:<br /><br /><input />
                </div>
                <div className="add-new-field">
                    Product Name:<br /><br /><input />
                </div>
                <div className="add-new-field">
                    Price:<br /><br /><input />
                </div>
                <div className="add-new-buttons">
                    <div className="add-new-button">Cancel</div>
                    <div className="add-new-button">Add to Inventory</div>
                </div>
            </div>
        )
    }
}

export default AddNew;