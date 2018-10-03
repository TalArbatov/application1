import React, { Component } from "react";
import d from "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage.js";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import GreetBanner from './components/GreetBanner/GreetBanner';

class App extends Component {
  render() {
    return (
      <div className={d.App}>
        <Header />
        <LandingPage />
        <GreetBanner />
        
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    );
  }
}

export default App;
