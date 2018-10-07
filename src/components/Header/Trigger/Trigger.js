import React from "react";
import { withLocalize, setActiveLanguage } from "react-localize-redux";
import { connect } from "react-redux";
import * as actions from "../../../store/actionTypes";
import Button from '@material-ui/core/Button';

import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

// const Trigger = ({ languages, activeLanguage, setActiveLanguage,props,test }) => {
//     return (
//         <div>
//             {/* <button onClick={props.toggleLanguage.bind(this, 'en')}>ENGLISH</button>
//             <button onClick={props.toggleLanguage.bind(this, 'he')}>HEBREW</button> */}
//             <ul className="selector">
//                 {languages.map(lang => (
//                     <li key={lang.code}>
//                         <button onClick={() => setActiveLanguage(lang.code) }>
//                             {lang.name}
//                         </button>
//                     </li>
//                 ))}
//                 <li>{test.test}</li>
//             </ul>
//         </div>
//     );
// };

// const Trigger = ({setActiveLanguage}) => {

//     return (
//         <div>
//             {/* <button onClick={props.toggleLanguage.bind(this, 'en')}>ENGLISH</button>
//             <button onClick={props.toggleLanguage.bind(this, 'he')}>HEBREW</button> */}

//             <button onClick={() => setActiveLanguage('fr')}>French</button>
//             <button onClick={() => setActiveLanguage('en')}>English</button>
//         </div>
//     );
// };

//importnat

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

    // languageChangeHandler = (lang) => {
    //     changeLanguage(lang);

    // }

    return (
      <div>
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
        color="inherit"
          onClick={() => {
            changeLanguage("en");
            this.languageHandler("en");
          }}
        >
          ENGLISH
        </Button>
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

// class Trigger extends React.Component {
//     render() {

//         // languageChangeHandler = (lang) => {
//         //     changeLanguage(lang);

//         // }

//         return(
//             <div>
//           <button onClick={() => {console.log(this.props)}}>he</button>
//             </div>
//         )
//     }
// }

// export default connect(mapStateToPros,mapDispatchToProps)(Trigger)

// export default withLocalize(connect(mapStateToPros, mapDispatchToProps)(Trigger));
