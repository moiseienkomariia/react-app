import React from 'react';
import dialogs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`} className={`${dialogs.item}`} activeClassName={dialogs.active}>
            {props.name}
        </NavLink>
    )
}
const Message = (props) => {
    return(
        <div className={dialogs.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) =>{
    return(
        <section>
            <h1>Dialogs</h1>
            <div  className={dialogs.dialogs}>
                <div className={dialogs.dialogs_items}>
                    <Dialog name="Mariia" id="1"/>
                    <Dialog name="Denys" id="2"/>
                    <Dialog name="Anna" id="3"/>
                    <Dialog name="Iryna" id="4"/>
                </div>
                <div className={dialogs.messages}>
                    <Message text="Hi!"/>
                    <Message text="Hello"/>
                    <Message text="Cool"/>
                </div>
            </div>
        </section>
    );
}

export default Dialogs
