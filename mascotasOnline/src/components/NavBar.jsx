/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/loguito.png';
const NavBar  = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg myNavbar">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" className='logoimg'/></NavLink>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">
                            <button className='navButton'>Home</button>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/products">
                            <button className='navButton'>Productos</button>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/myaccount">
                            <button className='navButton'>Mi cuenta</button>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">
                            <button className='navButton'>Carrito</button>
                        </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default NavBar;