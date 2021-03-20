import React from 'react';
import p from './Profile.module.css'

const Profile = () => {
    return(
        <main className={p.content}>
            <img src="header.jpg" alt=""/>
            <div className={p.user}>
                <img className={p.user_img} src="user.jpg" alt=""/>
            </div>
            <div>
                MyPosts
                <div className={p.posts}>
                    New Posts
                    <div className={p.item}>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;