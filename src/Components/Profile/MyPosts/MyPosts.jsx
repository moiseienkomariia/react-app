import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    return(
        <div>
            <section>
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