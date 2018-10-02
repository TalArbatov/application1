import React, { Component } from 'react';
import d from './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero2/Hero2';
import LandingPage from './components/LandingPage/LandingPage.js'
import AboutMe from './components/AboutMe/AboutMe';

const theme = createMuiTheme();


class App extends Component {
  render() {
    return (
        <div className={d.App}>
          <Header />
          {/* <Hero />
          <Hero2 /> */}
          <LandingPage />
          <AboutMe />
          {/* <div style={{width:'100vw', height:'100vh',background:'#E5E5E5'}}></div> */}
        </div>
    );
  }
}

export default App;
