import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return(
        <div>
            <section>
                <h2>My posts</h2>
                <textarea ref={newPostElement}
                          onChange={ onPostChange }
                          value={props.newPostText}/><br/>
                <button type="button" onClick={ addPost }>Add post</button>
                <div>
                    { postsElements }
                </div>
            </section>
        </div>
    );
}

export default MyPosts;