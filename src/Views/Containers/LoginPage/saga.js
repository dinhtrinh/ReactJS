import { takeEvery, put, call } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import LoginService from '../../../Services/LoginService';
import {
    LOGIN_USER_START
} from './constants';
import {
    loginUserError,
    loginUserSucess
} from './actions';

function* loginUserWorker(action) {
    try {
        const { account, history } = action;
        const { getUserList } = LoginService;
        const userList = yield call([LoginService, getUserList]);
        const user = userList.find(u => {
            return account.user === u.email && account.password === u.password;
        });

        let userInfor = {};
        if (!isEmpty(user)) {
            userInfor = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                roles: user.roles
            };
        }

        yield put(loginUserSucess(userInfor));
        localStorage.setItem('userInformation', JSON.stringify(userInfor));
        history.replace('/ringcentral');
    } catch (error) {
        yield put(loginUserError(error))
        throw error;
    }
}

const loginWatcher = [
    takeEvery(LOGIN_USER_START, loginUserWorker)
];

export default loginWatcher;