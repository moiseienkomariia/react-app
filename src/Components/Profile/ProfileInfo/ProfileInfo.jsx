import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <img src="header.jpg" alt=""/>
            <div className={p.user}>
                <img className={p.user_img} src="user.jpg" alt=""/>
            </div>
        </div>

    );
}

export default ProfileInfo;