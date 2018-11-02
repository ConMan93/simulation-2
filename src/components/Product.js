import React, { Component } from 'react';
import gear from '../images/gear_318-56262.jpg';
import './Product.css';
import axios from 'axios';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            editable: false,
            name: '',
            img: '',
            price: ''

        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editSave = this.editSave.bind(this);
    }
    componentDidMount() {
        this.setState({name: this.props.product.name, price: this.props.product.price, img: this.props.product.img});
    }
    deleteProduct() {
        axios.delete('/api/products/' + this.props.product.id).then(res => {
            this.props.getProducts();
        });
    }
    editSave() {
        if (!this.state.editable)
            this.setState({editable: true});
        else {
            let { name, price, img } = this.state;
            price = Number(price);
            if (this.state.name.trim() !== '' && !isNaN(this.state.price)) {
                axios.put('/api/products/' + this.props.product.id, { name, price, img }).then(res => this.props.getProducts()).catch(err => console.error(err));
                this.setState({editable: false});
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
        return(
            <div className="Product">
                <div className="product-image">
                    {this.state.img.trim() ? <img src={this.state.img} alt={this.props.product.name} /> : <img src={gear} alt={this.props.product.name} />}
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
                        <div onClick={this.deleteProduct}>Delete</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;