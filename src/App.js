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
        



        <section id="about-me">
        {/* <div style={{height:7, backgroundColor: '#d8d8d8'}}></div> */}

        <Skills />
          
        </section>
        <div style={{height:7, backgroundColor: '#6b32c5'}}></div>

        <Resume />
        <section id="skills">
        {/* <div style={{height:7, backgroundColor: '#d8d8d8'}}></div> */}

        <AboutMe />
        </section>
        <section id="resume">
        <div style={{height:7, backgroundColor: '#e2e2e2'}}></div>

        <Contact />
        </section>

        <section id="contact">
        <div style={{height:7, backgroundColor: '#6b32c5'}}></div>
        <GreetBanner />


        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
