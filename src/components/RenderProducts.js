import React, { Component } from 'react';
import Product from './Product';
import './RenderProducts.css';

class RenderProducts extends Component {
    render() {
        return(
            <div className="RenderProducts">
                {this.props.products.map((product, i) => {
                    return <Product product={product} key={i} />
                })}
            </div>
        )
    }
}

export default RenderProducts;