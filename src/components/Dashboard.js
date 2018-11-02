import React from 'react';
import Product from './Product';
import './Dashboard.css';

const Dashboard = (props) => {
    return(
        <div className="RenderProducts">
            {props.products.map((product, i) => {
                return <Product deleteProduct={props.deleteProduct} updateProduct={props.updateProduct} product={product} key={i} />
            })}
        </div>

    )
}

export default Dashboard;