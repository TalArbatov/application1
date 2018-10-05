import React, { Component } from "react";
import d from "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage.js";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import GreetBanner from './components/GreetBanner/GreetBanner';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';


import Footer from "./components/Footer/Footer";

class App extends Component {

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className={d.App}>
        <Header />
        <LandingPage />
        <Resume />



        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <GreetBanner />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
