import { all } from 'redux-saga/effects';
import contactWatchers from '../Views/Containers/ContactPage/saga';
export default function* sagas() {
    yield all([
        contactWatchers
    ]);
}