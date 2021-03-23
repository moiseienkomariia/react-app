import React from 'react';
import dialogs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) =>{
    return(
        <section>
            <h1>Dialogs</h1>
            <div  className={dialogs.dialogs}>
                <div className={dialogs.dialogs_items}>
                    <NavLink to="/dialogs/mariia" className={`${dialogs.item} ${dialogs.active}`}>
                        Mariia
                    </NavLink>
                    <NavLink to="/dialogs/denis" className={dialogs.item}>
                        Denis
                    </NavLink>
                    <NavLink to="/dialogs/anna" className={dialogs.item}>
                        Anna
                    </NavLink>
                    <NavLink to="/dialogs/iryna" className={dialogs.item}>
                        Iryna
                    </NavLink>
                </div>
                <div className={dialogs.messages}>
                    <div className={dialogs.message}>Hi!</div>
                    <div className={dialogs.message}>Hello!</div>
                    <div className={dialogs.message}>Cool.</div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs
