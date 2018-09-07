import { takeEvery, put, call } from 'redux-saga/effects';
import {
    ringCentralSendSmsSuccess,
    ringCentralSendSmsError
} from './actions';
import {
    RING_CENTRAL_SEND_SMS_START
} from './constants';
import RingCentralService from '../../../Services/RingCentralService';

function* ringCentralSendSmsWorker(action) {
    try {
        const { sendSms } = RingCentralService;
        const { request } = action;
        const response = yield call([RingCentralService, sendSms], request);
        yield put(ringCentralSendSmsSuccess(response));
    } catch (error) {
        yield put(ringCentralSendSmsError(error));
        throw error;
    }
}

const ringCentralWatcher = [
    takeEvery(RING_CENTRAL_SEND_SMS_START, ringCentralSendSmsWorker)
];

export default ringCentralWatcher;