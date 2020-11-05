import React from 'react';
import style from './BlurringButton.module.css'
import {NavLink} from "react-router-dom";

class BlurringButton extends React.Component {
    render() {
        return(
            <NavLink to={this.props.to} className={style.button}>{this.props.text}</NavLink>
        )
    }
}

export default BlurringButton