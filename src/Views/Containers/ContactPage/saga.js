import { takeEvery, put, call, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import {
    getDetailContactStart,
    getDetailContactSuccess,
    getDetailContactError,
    updateDetailContactSuccess,
    updateDetailContactError
} from './actions';
import {
    INPUT_DATA_CONTACT_FORM,
    GET_DETAIL_CONTACT_START,
    UPDATE_DETAIL_CONTACT_START
} from './constants';
import ContactService from '../../../Services/ContactService';

const getSelectedId = state => state.contact.selectedContactId;

function* inputDataContactFormWorker() {
    try {
        //contactForm
        yield put(reset(''));
    } catch (error) {
        throw error;
    }
}

function* getDetailContactWorker(action) {
    try {
        const { getContactDetail } = ContactService;
        const contact = yield call([ContactService, getContactDetail], action.id);
        yield put(getDetailContactSuccess(contact));
    } catch (error) {
        yield put(getDetailContactError(error));
        throw error;
    }
}

function* updateDetailContactWorker(action) {
    try {
        const { updateContact } = ContactService;
        const selectedId = yield select(getSelectedId);
        const contact = yield call([ContactService, updateContact], selectedId, action.data);
        yield put(updateDetailContactSuccess(contact));
        yield put(getDetailContactStart(selectedId))
    } catch (error) {
        yield put(updateDetailContactError(error));
        throw error;
    }
}
const contactWatchers = [
    takeEvery(INPUT_DATA_CONTACT_FORM, inputDataContactFormWorker),
    takeEvery(GET_DETAIL_CONTACT_START, getDetailContactWorker),
    takeEvery(UPDATE_DETAIL_CONTACT_START, updateDetailContactWorker),
];

export default contactWatchers;