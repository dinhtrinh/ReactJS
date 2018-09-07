import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCES,
    LOGIN_USER_ERROR
} from './constants';

export const loginUserStart = (account, history) => {
    return {
        type: LOGIN_USER_START,
        account,
        history
    }
};

export const loginUserSucess = (user) => {
    return {
        type: LOGIN_USER_SUCCES,
        user
    }
};

export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_ERROR,
        error
    }
};