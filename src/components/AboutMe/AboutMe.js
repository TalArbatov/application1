import React, { Component } from "react";
import d from "./AboutMe.css";
import patternBackground from "./../../images/about_me/pattern.png";
import AboutMeText from "./AboutMeText/AboutMeText";
import Hobbies from "./Hobbies/Hobbies";
import { connect } from "react-redux";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

class AboutMe extends Component {
  render() {
    let style;
    if (this.props.rootReducer.language === "en") style = { direction: "ltr" };
    else if (this.props.rootReducer.language === "he")
      style = { direction: "rtl" };

    return (
      <div ref="hello" className={d.flexContainer} style={{...styles.background , ...style}}>
        <AboutMeText flexBasis="75%" />
        <Hobbies flexBasis="15%" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    rootReducer: state
  };
};
export default connect(mapStateToProps)(withNamespaces("translation")(AboutMe));
const styles = {
  background: {
    // backgroundImage: `url(${patternBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  },
  bannerTitle: {
    color: "#EFEFEF",
    fontFamily: "Gisha",
    margin: 0,
    fontSize: "100px"
  },
  bannerSubtitle: {
    color: "#EFEFEF",
    fontFamily: "Gisha",
    margin: 0,
    fontSize: "32px"
  }
};
