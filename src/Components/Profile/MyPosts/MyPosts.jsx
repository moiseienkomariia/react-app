import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="button">Add post</button>
            </div>
            <section className={posts.posts_list}>
                <h2>My posts</h2>
                <div>
                    <Post message='Hello, World' likesCount='15'/>
                    <Post message='Hi, how are you?' likesCount='20'/>
                </div>
            </section>
        </div>
    );
}

export default MyPosts;