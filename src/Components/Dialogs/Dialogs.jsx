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
            {props.message}
        </div>
    )
}

const Dialogs = (props) =>{
    let dialogsData = [
        {id: 1, name: "Mariia"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Iryna"}
    ];
    let messagesData = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine:)"},
        {id: 4, message: "Good."}
    ]
    return(
        <section>
            <h1>Dialogs</h1>
            <div  className={dialogs.dialogs}>
                <div className={dialogs.dialogs_items}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                </div>
                <div className={dialogs.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                </div>
            </div>
        </section>
    );
}

export default Dialogs
