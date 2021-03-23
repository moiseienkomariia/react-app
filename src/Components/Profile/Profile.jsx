import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <img src="header.jpg" alt=""/>
            <div className={p.user}>
                <img className={p.user_img} src="user.jpg" alt=""/>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>

    );
}

export default Profile;