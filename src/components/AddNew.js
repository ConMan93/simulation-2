import React, { Component } from 'react';
import axios from 'axios';
import gear from '../images/gear_318-56262.jpg';
import { withRouter } from 'react-router-dom';
import './AddNew.css'

class AddNew extends Component {
    constructor() {
        super();
        this.state = {
            newName: '',
            newPrice: '',
            newImg: '',
            displayWarning: false
        }
        this.updateInput = this.updateInput.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.goHome = this.goHome.bind(this);
    }
    createProduct() {
        if (this.state.newName.trim() !== '' && !isNaN(this.state.newPrice))    {
            let name = this.state.newName;
            let img = this.state.newImg;
            let price = this.state.newPrice;
            axios.post('/api/products', {name, img, price}).then(res => {
                this.setState({newName: '', newPrice: '', newImg: '', displayWarning: false})
                this.props.getProducts();
                this.props.history.push('/');
            }).catch(err => console.error(err))
        } else
            this.setState({displayWarning: true});
    }
    goHome() {
        this.props.history.push('/');
    }
    updateInput(val, which) {
        switch (which) {
            case 1:
                this.setState({newImg: val});
                break;
            case 2:
                this.setState({newName: val});
                break;
            case 3:
                this.setState({newPrice: val})
                break;
            default:
                break;
        }
    }
    render() {
        return(
            <div className="AddNew">
                <div className="add-new-image">
                    {this.state.newImg.trim() ? <img src={this.state.newImg} alt="whatever you put in that input box" /> : <img src={gear} alt="gear (default)" />}
                </div>
                <div className="add-new-field">
                    Image URL:<br /><br /><input value={this.state.newImg} onChange={e => this.updateInput(e.target.value, 1)} />
                </div>
                <div className="add-new-field">
                    Product Name:<br /><br /><input value={this.state.newName} onChange={e => this.updateInput(e.target.value, 2)} />
                </div>
                <div className="add-new-field">
                    Price:<br /><br /><input value={this.state.newPrice} onChange={e => this.updateInput(e.target.value, 3)} />
                </div>
                <div className="add-new-buttons">
                    <div className="add-new-button" onClick={this.goHome}>Cancel</div>
                    <div className="add-new-button" onClick={this.createProduct}>Add to Inventory</div>
                </div>
                {this.state.displayWarning ? <div>Input Problem, check that the price is an integer and the other fields haven't been left blank</div> : false}
            </div>
        )
    }
}

export default withRouter(AddNew);