import * as actionTypes from './actions/actions';

const initialState = {
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case actionTypes.LOGOUT: 
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }
}

export default reducer;