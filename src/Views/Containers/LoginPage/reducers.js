import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCES,
    LOGIN_USER_ERROR
} from './constants';

const initialState = {
    userInformation: null,
    isLoggedIn: false,
    error: null
}

const loginPageReducer = (state = initialState, action) => {
    const { type, user, error } = action;
    switch (type) {
        case LOGIN_USER_START:
            return {
                ...state
            }
        case LOGIN_USER_SUCCES:
            return {
                ...state,
                userInformation: user,
                isLoggedIn: true
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: error
            }
        default:
            return {
                ...state
            }
    }
}

export default loginPageReducer;