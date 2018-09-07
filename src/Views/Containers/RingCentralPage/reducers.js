import {
    RING_CENTRAL_SEND_SMS_START,
    RING_CENTRAL_SEND_SMS_SUCCESS,
    RING_CENTRAL_SEND_SMS_ERROR
} from './constants';


const initialState = {
    responseSendSms: null,
    resquestSendSms: null,
    error: null
};

const ringCentralPageReducer = (state = initialState, action) => {
    const { type, request, response, error } = action;
    switch (type) {
        case RING_CENTRAL_SEND_SMS_START:
            return {
                ...state,
                resquestSendSms: request
            };
        case RING_CENTRAL_SEND_SMS_SUCCESS:
            return {
                ...state,
                responseSendSms: response
            };
        case RING_CENTRAL_SEND_SMS_ERROR:
            return {
                ...state,
                error: error
            };
        default: return {
            ...state
        }
    }
};

export default ringCentralPageReducer;