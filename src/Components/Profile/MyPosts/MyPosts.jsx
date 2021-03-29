import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 1, message: "Hi. How are you?", likesCount: 15}
    ]
    return(
        <div>
            <section className={posts.posts_list}>
                <h2>My posts</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                <button type="button">Add post</button>
                <div>
                    <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                </div>
            </section>
        </div>
    );
}

export default MyPosts;