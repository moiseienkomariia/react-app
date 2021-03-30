import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: "Mariia"},
    {id: 2, name: "Denis"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Iryna"}
];
let messages = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I'm fine:)"},
    {id: 4, message: "Good."}
];
let posts = [
    {id: 1, message: "Hello", likesCount: 12},
    {id: 2, message: "Hi. How are you?", likesCount: 15},
    {id: 3, message: "Hi.", likesCount: 13},
    {id: 4, message: "Hi, Denis", likesCount: 16},
    {id: 5, message: "Goodbye.", likesCount: 1}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
