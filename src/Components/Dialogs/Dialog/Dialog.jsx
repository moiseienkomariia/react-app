import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const Dialog = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`} className={`${s.item}`} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}

export default Dialog;