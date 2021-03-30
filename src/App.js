import React, { Components } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) =>  {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Nav/>
              <main className="app-wrapper-content">
                  {/*<Route path={'/profile'} component={Profile}/>*/}
                  {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                  {/*<Route path={'/news'} component={News}/>*/}
                  {/*<Route path={'/music'} component={Music}/>*/}
                  {/*<Route path={'/settings'} component={Settings}/>*/}

                  <Route path={'/profile'} render={ () => <Profile posts={props.posts}/> }/>
                  <Route path={'/dialogs'} render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
              </main>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
