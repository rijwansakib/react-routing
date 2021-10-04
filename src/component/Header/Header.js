import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="p-2">
            <NavLink className="header" to="/home"><h1>XYZ.COM</h1></NavLink>
            <div className="navbar">
            <NavLink className="header" to="/home">Home</NavLink>
            <NavLink className="header" to="/service">Service</NavLink>
            <NavLink className="header" to="/blog">Blog</NavLink>
            <NavLink className="header" to="/about">About</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;