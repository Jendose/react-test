import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="header__logo"><a href='/'><img src={logo}/></a></div>
                        <div className="header__menu menu">
                            <div className="menu__icon icon-menu">
                                <span></span>
                            </div>
                            <div className="menu__body">
                                <div className="menu__element">Tracks Database</div>
                                <div className="menu__element">Liked Tracks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header