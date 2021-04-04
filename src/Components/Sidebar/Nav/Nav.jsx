import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavItem from "./NavItem/NavItem";

const Nav = (props) => {
    let navItems = props.state;
    let navItemsElements = navItems.map( i => <NavItem id={i.id} name={i.item} link={i.link}/>);
    return(
        <nav>
            <ul>
                {navItemsElements}
            </ul>
        </nav>
    );
}

export default Nav