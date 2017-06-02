import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from "./Navbar/Navbar";
import MainHeader from "./MainHeader/MainHeader";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";  

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <MainHeader/>
          <MainContent/>
          <Footer/>
      </div>
    );
  }
}

export default App;
