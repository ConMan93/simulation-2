import React, { Component } from 'react';
import gear from '../images/gear_318-56262.jpg';
import './Product.css';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            editable: false,
            name: '',
            img: '',
            price: '',
            isUpdated: false

        }
        this.editSave = this.editSave.bind(this);
    }
    componentDidUpdate(prevProps) {
        // this just changes the background color of a product if you update it. I couldn't come up with  another place to use componentDidUpdate given my code structure
        if (this.props.product.name != prevProps.product.name || this.props.product.img != prevProps.product.img || this.props.product.price != prevProps.product.price)
            this.setState({isUpdated: true})
    }
    editSave() {
        if (!this.state.editable) {
            this.setState({editable: true, name: this.props.product.name, img: this.props.product.img, price: this.props.product.price});
        }
        else {
            let { name, price, img } = this.state;
            price = Number(price);
            if (name.trim() !== '' && !isNaN(price)) {
                this.props.updateProduct(this.props.product.id, name, price, img);
                this.setState({editable: false})
                
            }
        }
    }
    updateInput(val, which) {
        switch (which) {
            case 1:
                this.setState({img: val});
                break;
            case 2:
                this.setState({name: val});
                break;
            case 3:
                this.setState({price: val})
                break;
            default:
                break;
        }
    }
    render() {
        
        let bgColor = this.state.isUpdated ? '#AB2A19' : '#ED6B5A'
        return(
            <div className="Product" style={{backgroundColor: bgColor}}>
                <div className="product-image">
                    {this.props.product.img.trim() ? <img src={this.props.product.img} alt={this.props.product.name} /> : <img src={gear} alt={this.props.product.name} />}
                </div>
                <div className="product-info">
                    <div className="product-info-text">
                        {this.state.editable ?
                                <div>Product Name:<br /><input value={this.state.name} onChange={e => this.updateInput(e.target.value, 2)} /><br /><br />
                                Price:<br /><input value={this.state.price} onChange={e => this.updateInput(e.target.value, 3)} /><br /><br />
                                Image URL:<br /><input value={this.state.img} onChange={e => this.updateInput(e.target.value, 1)} />
                                </div>
                            :
                                <div>Product Name:<br />{this.props.product.name}<br /><br />
                                Price:<br />{this.props.product.price}</div>
                        }
                    </div>
                    <div className="delete-edit">
                        <div onClick={this.editSave}>{this.state.editable ? 'Save' : 'Edit'}</div>
                        <div onClick={e => this.props.deleteProduct(this.props.product.id)}>Delete</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;