let renderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 12},
            {id: 2, message: "Hi. How are you?", likesCount: 15},
            {id: 3, message: "Hi.", likesCount: 13},
            {id: 4, message: "Hi, Denis", likesCount: 16},
            {id: 5, message: "Goodbye.", likesCount: 1}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Mariia"},
            {id: 2, name: "Denis"},
            {id: 3, name: "Anna"},
            {id: 4, name: "Iryna"}
        ],
        messages: [
            {id: 1, message: "Hello!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "I'm fine:)"},
            {id: 4, message: "Good."}
        ]
    },
    sidebar:{
        nav: [
            {id: 1, item: "My profile", link: "/profile"},
            {id: 2, item: "Message", link: "/dialogs"},
            {id: 3, item: "News", link: "/news"},
            {id: 4, item: "Music", link: "/music"},
            {id: 5, item: "Settings", link: "/settings"}
        ],
       friends: [
          {id: 1, name: "Olga"},
          {id: 2, name: "Denis"},
          {id: 3, name: "Anna"},
          {id: 4, name: "Iryna"},
          {id: 5, name: "Ksenia"}
      ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    renderEntireTree(state);
}
export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;