import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) =>{
    let dialogs = props.dialogs;
    let messages = props.messages;
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
