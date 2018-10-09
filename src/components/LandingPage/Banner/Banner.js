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
import { connect } from "react-redux";

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
    let hebrewBanner;
    if (this.props.rootReducer.language == "he") {
      console.log('hebrew!')
      hebrewBanner = {
        transform: "scaleX(-1)",
        direction:'rtl'
      };
    } else {
      console.log('english!!')
      hebrewBanner = {
        transform: "none"
      };
    }
    return (
      // <Parallax
      //     className={d.parallax}
      //     offsetYMax={20}
      //     offsetYMin={-20}
      //     slowerScrollRate
      //     tag="figure"
      // >

      <div className="container" style={{ overflow: "hidden" }}>
        <div
          style={{ height: "100%", width: "100%", backgroundColor: "black" }}
        />
        <div
          className={d.landingBanner}
          style={{ ...styles.landingBanner, ...hebrewBanner }}
        >
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
            <p  style={hebrewBanner} className={d.titleElement}>
              <Trans i18nKey="landingPage.title" />
            </p>
          </div>
          <div style={{ padding: "0 40px 40px 40px" }}>
            <p lassName="subtitleElement" style={{...styles.bannerSubtitle, ...hebrewBanner}}>
              <Trans i18nKey="landingPage.subtitle" />
            </p>
          </div>
        </div>
      </div>

      // </Parallax>
    );
  }
}
const mapStateToProps = state => {
  return {
    rootReducer: state
  };
};
export default connect(mapStateToProps)(withNamespaces("translation")(Banner));

const titleOptions = {
  strings: ["Hello, I'm Tal."],
  typeSpeed: 1,
  smartBackspace: false,
  showCursor: false
};

const styles = {
  landingBanner: {
    background: `repeating-linear-gradient( to right , black, rgba(0, 0, 0, 0) ), url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
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
    fontSize: "20px",
    maxWidth: "500px"
  }
};
