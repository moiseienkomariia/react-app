import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return(
        <article className={post.item}>
            <img src="user_post.png" alt="post avatar"/>
            <h3>Post 1</h3>
            <div>{ props.message }</div>
            <div className="post.footer">
                <span>Likes: { props.likesCount }</span>
            </div>
        </article>
    );
}

export default Post;