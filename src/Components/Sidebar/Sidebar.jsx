import React from 'react';
import sidebar from './Sidebar.module.css';
import Nav from "./Nav/Nav";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return(
        <div className={sidebar.sidebar}>
            <Nav state={props.state.nav}/>
            <Friends state={props.state.friends}/>
        </div>
    );
}

export default Sidebar