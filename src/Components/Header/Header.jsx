import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return(
        <header className={h.header}>
            <img src="logo.png" alt=""/>
        </header>
    );
}

export default Header;