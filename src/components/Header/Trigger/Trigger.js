import React from 'react';
import { withLocalize, setActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import * as actions from '../../../store/actionTypes';

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

const Trigger = ({setActiveLanguage}) => {

    return (
        <div>
            {/* <button onClick={props.toggleLanguage.bind(this, 'en')}>ENGLISH</button>
            <button onClick={props.toggleLanguage.bind(this, 'he')}>HEBREW</button> */}
           
            <button onClick={() => setActiveLanguage('fr')}>French</button>
            <button onClick={() => setActiveLanguage('en')}>English</button>
            <h1>{props.test}</h1>
        </div>
    );
};

const mapStateToPros = (state) => {
    return {
        rootReducer: state.rootReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleLanguage: lang => {
            return dispatch({
                type: actions.TOGGLE_LANGUAGE,
                language: lang
            })
        }
    }
}

export default withLocalize(connect(mapStateToPros, mapDispatchToProps)(Trigger));