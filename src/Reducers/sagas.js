import { all } from 'redux-saga/effects';
import contactWatchers from '../Views/Containers/ContactPage/saga';
import ringCentralWatchers from '../Views/Containers/RingCentralPage/saga';

export default function* sagas() {
    yield all([
        contactWatchers,
        ringCentralWatchers
    ]);
}