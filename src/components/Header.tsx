import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.png';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo"><NavLink to='/'><img src={logo}/></NavLink></div>
                    <div className="header__menu menu">
                        <div className="menu__icon icon-menu">
                            <span></span>
                        </div>
                        <div className="menu__body">
                            <NavLink to='/tracks' className="menu__element">Tracks Database</NavLink>
                            <NavLink to='/favorites' className="menu__element">Liked Tracks</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header