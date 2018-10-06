import * as actionTypes from './actionTypes';

const initialState = {
    language: 'en'
}

const reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case actionTypes.TOGGLE_LANGUAGE:
            if (action.payload.language === 'he')
                newState = { ...newState, language: 'en' }
            else if (action.payload.language === 'en')
                newState = { ...newState, language: 'he' }
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;