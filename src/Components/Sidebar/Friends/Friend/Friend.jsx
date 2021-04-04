import React from 'react';
import friend from './Friend.module.css';

const Friend = (props) => {
    return(
       <li>{props.name}</li>
    );
}

export default Friend