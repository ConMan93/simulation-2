import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="Product">
                <div className="product-image">
                    <img src="" alt={this.props.product.name} />
                </div>
                <div className="product-info">
                    {this.props.product.name}<br />
                    {this.props.product.price}
                </div>
            </div>
        )
    }
}

export default Product;