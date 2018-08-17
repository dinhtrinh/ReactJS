import {
    INPUT_DATA_CONTACT_FORM
} from './constants';
import { takeEvery, put } from 'redux-saga/effects';
import { reset } from 'redux-form';

function* inputDataContactFormWorker() {
    try {
        yield put(reset('contactForm'));
    } catch (error) {
        throw error;
    }
}

const contactWatchers = [
    takeEvery(INPUT_DATA_CONTACT_FORM, inputDataContactFormWorker)
];

export default contactWatchers;