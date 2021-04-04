import React from 'react';
import navItem from './NavItem.module.css';
import {NavLink} from "react-router-dom";
import classes from "../Nav.module.css";

const NavItem = (props) => {
    return(
        <li><NavLink className={classes.item} activeClassName={classes.active} to={props.link}>{props.name}</NavLink></li>
    );
}

export default NavItem