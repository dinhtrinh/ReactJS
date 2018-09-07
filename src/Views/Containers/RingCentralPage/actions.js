import {
    RING_CENTRAL_SEND_SMS_START,
    RING_CENTRAL_SEND_SMS_SUCCESS,
    RING_CENTRAL_SEND_SMS_ERROR
} from './constants';

export const ringCentralSendSmsStart = (request) => {
    return {
        type: RING_CENTRAL_SEND_SMS_START,
        request
    }
}

export const ringCentralSendSmsSuccess = (response) => {
    return {
        type: RING_CENTRAL_SEND_SMS_SUCCESS,
        response
    }
}

export const ringCentralSendSmsError = (error) => {
    return {
        type: RING_CENTRAL_SEND_SMS_ERROR,
        error
    }
}