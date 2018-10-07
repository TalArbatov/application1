import React from "react";
import background from "../../../images/background2.jpg";
import { Parallax } from "react-scroll-parallax";
import d from "./Banner.css";
import Typed from "typed.js";
// import hebrewTranslation from "../../../translations/he.translation.json";
// import englishTranslation from '../../../translations/en.translation.json';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

class Banner extends React.Component {
  componentDidMount() {
    //language localization
    // this.props.addTranslation(hebrewTranslation);
    // this.props.addTranslation(englishTranslation);

    //self typing text
    // setTimeout(() => {
    //   const typed2 = new Typed(".subtitleElement", this.subtitleOptions);
    // }, 3300);
  }

  componentDidUpdate() {}
  // componentWillUnmount = () => {
  //     window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll = (event) => {
  //     console.log(window.pageYOffset)
  //     // let scrollTop = event.srcElement.body.scrollTop,
  //     //     itemTranslate = Math.min(0, scrollTop/3 - 60);
  //     // console.log(itemTranslate)
  //     // this.setState({
  //     //   transform: itemTranslate
  //     // });
  // }

  subtitleOptions = {
    strings: [
      "A Fullstack web developer with a passion for creating clean and elegant solutions."
    ],
    typeSpeed: 15,
    showCursor: false
  };

  render() {
    return (
      // <Parallax
      //     className={d.parallax}
      //     offsetYMax={20}
      //     offsetYMin={-20}
      //     slowerScrollRate
      //     tag="figure"
      // >

      <div className="container">
        <div className={d.landingBanner} style={styles.landingBanner}>
          <div style={{ padding: "40px" }}>
            {/* <p className='titleElement' style={styles.bannerTitle}></p> */}

            {/* <p className={d.titleElement}>Hello, I am Tal</p> */}
            {/* <p className={d.titleElement}> <Translate id="movie.title">Hello I am Tal</Translate></p> */}
            <p className={d.titleElement}>
              {" "}
              {/* <Translate id="movie.title">Hello I am Tal</Translate> */}
            </p>
            {/* <NamespacesConsumer>
              {(t, { i18n }) => <h2>{t("title")}</h2>}{" "}
            </NamespacesConsumer> */}
            <p className={d.titleElement}>
              <Trans i18nKey="landingPage.title" />
            </p>
          </div>
          <div style={{ padding: "0 40px 40px 40px" }}>
            <p className="subtitleElement" style={styles.bannerSubtitle} >
            <Trans i18nKey="landingPage.subtitle" />

            </p>
          </div>
        </div>
      </div>

      // </Parallax>
    );
  }
}

export default withNamespaces("translation")(Banner);

const titleOptions = {
  strings: ["Hello, I'm Tal."],
  typeSpeed: 1,
  smartBackspace: false,
  showCursor: false
};

const styles = {
  landingBanner: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "100vw",
    minHeight: "40vh",
    padding: "20px 0"
  },

  bannerTitle: {
    color: "#EFEFEF",
    fontFamily: "Gisha",
    margin: 0,
    fontSize: "60px"
  },
  bannerSubtitle: {
    color: "#EFEFEF",
    fontFamily: "Gisha",
    margin: 0,
    fontSize: "25px",
    maxWidth: "500px"
  }
};
