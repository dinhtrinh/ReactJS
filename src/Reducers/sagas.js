import { all } from 'redux-saga/effects';
import contactWatchers from '../Views/Containers/ContactPage/saga';
import ringCentralWatchers from '../Views/Containers/RingCentralPage/saga';
import loginWatchers from '../Views/Containers/LoginPage/saga';

export default function* sagas() {
    yield all([
        loginWatchers,
        contactWatchers,
        ringCentralWatchers
    ]);
}