import * as actionTypes from "./actionTypes";
import { CLIENT_RENEG_LIMIT } from "tls";

// const initialState = {
//     language: 'en'
// }
const getLanguage = () => {
  let language = window.localStorage.getItem("language");
  console.log('language in localStorage is: ' + language)
  if (language !== "en" && language !== "he") language = "en";
  return language;
};

const reducer = (state, action) => {
  if (state == null) {
    state = {
      language: getLanguage()
    };
  }
  console.log("IN REDUCER: current state language = " + state.language);
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.TOGGLE_LANGUAGE:
      newState = { ...newState, language: action.payload.language };
      window.localStorage.setItem("language", action.payload.language);
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
