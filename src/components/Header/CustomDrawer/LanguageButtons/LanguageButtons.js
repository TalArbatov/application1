import React from "react";
import { connect } from "react-redux";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";
import d from "./LanguageButtons.css";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Code";
import ListItemText from "@material-ui/core/ListItemText";
import Scrollspy from "react-scrollspy";
import { Typography } from "@material-ui/core";
import * as actions from "../../../../store/actionTypes";
import Language from "@material-ui/icons/Language";
class LanguageButtons extends React.Component {
  languageHandler = lang => {
    console.log("starting redux for " + lang);
    this.props.toggleLanguage(lang);
    this.props.toggleDrawer();
  };

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
      <div className={d.listContainer}>
      <div className={d.list}>

          <ListItem
      
      classes={{display:'inline-bock', width:'40%'}}

        onClick={() => {
          changeLanguage("he");
          this.languageHandler("he");
        }}
      >
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="עברית" />
      </ListItem>
      <ListItem
      className={d.listItem}
      classes={{display:'inline-bock', width:'40%'}}
        onClick={() => {
          changeLanguage("en");
          this.languageHandler("en");
        }}
      >
        {/* <ListItemIcon>
          <Language />
        </ListItemIcon> */}
        <ListItemText primary="English" />
      </ListItem>

</div>
      </div>
    )
    
 
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
)(withNamespaces("translation")(LanguageButtons));
