import React from 'react';
import friends from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = props.state;
    let friendsElements = friends.map( f => <Friend id={f.id} name={f.name}/>);
    return(
        <div>
            <p>Friends</p>
            <ul>
                {friendsElements}
            </ul>
        </div>
    );
}

export default Friends