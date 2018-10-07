import * as actionTypes from './actionTypes';
import { CLIENT_RENEG_LIMIT } from 'tls';

const initialState = {
    language: 'en'
}

const reducer = (state = initialState, action) => {
    console.log('IN REDUCER: current state language = ' + state.language);
    let newState = { ...state };
    switch (action.type) {
        case actionTypes.TOGGLE_LANGUAGE:
           
                newState = { ...newState, language: action.payload.language }
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;