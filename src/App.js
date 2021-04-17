import React, { Components } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Sidebar/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Sidebar from "./Components/Sidebar/Sidebar";
import {addPost} from "./redux/state";

const App = (props) =>  {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Sidebar state={props.state.sidebar}/>
              <main className="app-wrapper-content">
                  {/*<Route path={'/news'} component={News}/>*/}
                  {/*<Route path={'/music'} component={Music}/>*/}
                  {/*<Route path={'/settings'} component={Settings}/>*/}
                  <Route path={'/dialogs'} render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                  <Route path={'/profile'} render={ () => <Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch}
                  /> }/>
              </main>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
