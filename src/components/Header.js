import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <h2>SHELFIE</h2>
            <Link to="/" className="header-button">Dashboard</Link>
            <Link to="/addnew" className="header-button">Add Inventory</Link>
        </header>
    )
}

export default Header;