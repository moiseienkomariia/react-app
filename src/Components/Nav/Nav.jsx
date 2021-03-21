import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={classes.nav}>
            <ul>
                <li><a className={`${classes.item} ${classes.active}`} href="/#">My Profile</a></li>
                <li><a className={classes.item} href="/#">Messages</a></li>
                <li><a className={classes.item} href="/#">News</a></li>
                <li><a className={classes.item} href="/#">Music</a></li>
                <li><a className={classes.item} href="/#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav