import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`} className={`${s.item}`} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}
const Message = (props) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) =>{
    let dialogs = [
        {id: 1, name: "Mariia"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Iryna"}
    ];
    let messages = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine:)"},
        {id: 4, message: "Good."}
    ]
    let dialogsElements = dialogs.map( d => <Dialog name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message}/> );

    return(
        <section>
            <h1>Dialogs</h1>
            <div  className={s.dialogs}>
                <div className={s.dialogs_items}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </section>
    );
}

export default Dialogs
