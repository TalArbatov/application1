import React from "react";
import background from "../../../images/background2.jpg";
import { Parallax } from "react-scroll-parallax";
import d from "./Banner.css";
import Typed from "typed.js";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";
import { connect } from "react-redux";

class Banner extends React.Component {
  render() {
    let hebrewBanner = {};
    let hebrewParagraph = {};
    if (this.props.rootReducer.language == "he") {
      hebrewBanner = {
        transform: 'scaleX(-1)',
      }
      hebrewParagraph = {
        transform: 'scaleX(-1)',
       direction: 'rtl'
      };
    } 
    

    return (
      <div className="container" style={{ overflow: "hidden" }}>
        <div style={{ height: "100%", width: "100%", backgroundColor: "black" }}/>
        <div className={d.landingBanner} style={{ ...styles.landingBanner, ...hebrewBanner}}>
          <div className={d.paragraphs} >
            <p style={hebrewParagraph} className={d.titleElement}><Trans i18nKey="landingPage.title" /></p>
            <br />
            <p style={hebrewParagraph} className={d.subtitleElement}><Trans i18nKey="landingPage.subtitle" /></p>
          </div>
          <div>
            
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
  // bannerSubtitle: {
  //   color: "#EFEFEF",
  //   fontFamily: "Gisha",
  //   margin: 0,
  //   fontSize: "20px",
  //   maxWidth: "500px"
  // }
};
