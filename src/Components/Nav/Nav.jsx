import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/profile">My Profile</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/music">Music</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav