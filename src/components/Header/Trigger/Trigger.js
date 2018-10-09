import React from "react";
import { withLocalize, setActiveLanguage } from "react-localize-redux";
import { connect } from "react-redux";
import * as actions from "../../../store/actionTypes";
import Button from "@material-ui/core/Button";
import d from "./Trigger.css";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

class Trigger extends React.Component {
  languageHandler = lang => {
    console.log("starting redux for " + lang);
    this.props.toggleLanguage(lang);
  };

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    let languageButtons;

    if(this.props.rootReducer.language === 'en') {
      languageButtons =<div>
      <Button
        color="inherit"
        onClick={() => {
          changeLanguage("he");
          this.languageHandler("he");
        }}
      >
        עברית
      </Button>
      <Button
              className={d.selected}

        color="inherit"
        onClick={() => {
          changeLanguage("en");
          this.languageHandler("en");
        }}
      >
        ENGLISH
      </Button>
    </div>
    }
    else if (this.props.rootReducer.language === 'he') {
      languageButtons =<div>
      <Button
        className={d.selected}
        color="inherit"
        onClick={() => {
          changeLanguage("he");
          this.languageHandler("he");
        }}
      >
        עברית
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          changeLanguage("en");
          this.languageHandler("en");
        }}
      >
        ENGLISH
      </Button>
    </div>
    }

    return (
      <div>
      {languageButtons}
      </div>
    );
  }
}

const mapStateToPros = state => {
  return {
    rootReducer: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleLanguage: lang => {
      return dispatch({
        type: actions.TOGGLE_LANGUAGE,
        payload: {
          language: lang
        }
      });
    }
  };
};

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(withNamespaces("translation")(Trigger));
