/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/loguito.png';
import cartIcon from '../assets/icons/shoppingCart.svg';
import { shoppingCartContext } from '../context';

const NavBar  = () => {
    const context = useContext(shoppingCartContext);
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
                            <button className='navButton'>Carrito
                            <img src={cartIcon} alt="" width="20px" className='iconCart'/>
                            </button>
                        </NavLink>
                        </li>
                    </ul>
                    <div className='containerCart'>
                        <img src={cartIcon} alt="" />
                        <h2 className='text-white'>{context.count}</h2>
                    </div>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default NavBar;