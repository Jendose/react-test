import React from 'react';
import style from './NoFavouritesPage.module.css'
import {NavLink} from "react-router-dom";

class NoFavouritesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.message}>
                <div className={style.text}>
                    Hey! There is nothing here...
                </div>
                <div className={style.text}>
                    Like some tracks from our database, and you'll find them here
                </div>
                <NavLink to='/tracks' className={style.button}>Explore</NavLink>
            </div>
        )
    }
}

export default NoFavouritesPage