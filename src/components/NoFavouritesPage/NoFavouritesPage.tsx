import React from 'react';
import style from './NoFavouritesPage.module.css'
import BlurringButton from "../BlurringButton/BlurringButton";

const NoFavouritesPage = () => {
    return(
            <div className={style.message}>
                <div className={style.text}>
                    Hey! There is nothing here...
                </div>
                <div className={style.text}>
                    Like some tracks from our database, and you'll find them here
                </div>
                <BlurringButton to='/tracks' text='Explore'/>
            </div>
        )
}

export default NoFavouritesPage