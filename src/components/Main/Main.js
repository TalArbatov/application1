import React, { Component } from "react";
import d from "./Main.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import GreetBanner from "../GreetBanner/GreetBanner";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import red from "@material-ui/core/colors/red";
import Language from "../Language/Language";

//localization
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import translation from "../../translations/translation.json";

import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

import Footer from "../Footer/Footer";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgba(51, 51, 51, 0.7215686274509804)"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
  }
});

class Main extends Component {
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    //loading animation
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
    //localization
    // this.props.initialize({
    //   languages: [
    //     { name: "English", code: "en" },
    //     { name: "French", code: "fr" }
    //   ],
    //   translation: translation,
    //   options: { renderToStaticMarkup }
    // });
  }

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <MuiThemeProvider theme={theme}>
        <div className={d.Main}>
          <Header />
          <LandingPage />

          <section id="about-me">
            {/* <div style={{height:7, backgroundColor: '#d8d8d8'}}></div> */}

            <Skills />
          </section>
          <div style={{ height: 7, backgroundColor: "#6b32c5" }} />

          <Resume />
          <section id="skills">
            {/* <div style={{height:7, backgroundColor: '#d8d8d8'}}></div> */}

            <AboutMe />
          </section>
          <section id="resume">
            <div style={{ height: 7, backgroundColor: "#e2e2e2" }} />

            <Contact />
          </section>

          <section id="contact">
            <div style={{ height: 7, backgroundColor: "#6b32c5" }} />
            <GreetBanner />
          </section>
          {/* <Footer /> */}
          {/* <ReduxTest /> */}
          {/* <button onClick={() => changeLanguage("he")}>he</button>
          <button onClick={() => changeLanguage("en")}>en</button>
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
          <div>{t('description.part2')}</div> */}

        </div>
      </MuiThemeProvider>
    );
  }
}

export default withNamespaces("translation")(Main);
