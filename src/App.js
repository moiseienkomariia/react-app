import React, { Components } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () =>  {
  return (
      <div className="app-wrapper">
          <Header/>
          <Nav/>
          <main className="app-wrapper-content">
              {/*<Profile/>*/}
              <Dialogs/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
