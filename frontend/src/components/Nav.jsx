import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='headerNav'>
            <Link to="/">HOME</Link>
            <Link to="/board">BOARD</Link>
            <Link to="/login">LOGIN</Link>
        </nav>
    );
};

export default Nav;