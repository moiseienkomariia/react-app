import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 2, message: "Hi. How are you?", likesCount: 15},
        {id: 3, message: "Hi.", likesCount: 13},
        {id: 4, message: "Hi, Denis", likesCount: 16},
        {id: 5, message: "Goodbye.", likesCount: 1}
    ];
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    return(
        <div>
            <section className={posts.posts_list}>
                <h2>My posts</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                <button type="button">Add post</button>
                <div>
                    { postsElements }
                </div>
            </section>
        </div>
    );
}

export default MyPosts;