import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='headerNav'>
            <h1 id='title-header'>Notice Board System</h1>
            <div id='container-btn-header'>
                <div className='btn-header'><Link to="/">HOME</Link></div>
                <div className='btn-header'><Link to="/board/1">BOARD</Link></div>
                <div className='btn-header'><Link to="/login">LOGIN</Link></div>
            </div>
        </nav>
    );
};

export default Nav;