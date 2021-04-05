import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree)

reportWebVitals();
