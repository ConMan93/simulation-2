import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <h2>SHELFIE</h2>
            <Link to="/addnew" className="header-button">Add a New Product</Link>
        </header>
    )
}

export default Header;