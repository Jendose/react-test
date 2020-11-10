import React from 'react';
import style from './BlurringButton.module.css'
import {NavLink} from "react-router-dom";

type Props = {
    to: string,
    text: string
}

const BlurringButton = ({to, text}: Props) => {
    return(
            <NavLink to={to} className={style.button}>{text}</NavLink>
    )
}

export default BlurringButton