import {
    INPUT_DATA_CONTACT_FORM,
    GET_DETAIL_CONTACT_START,
    GET_DETAIL_CONTACT_SUCCESS,
    GET_DETAIL_CONTACT_ERROR,
    RESET_STATE_CONTACT_DETAIL,
    UPDATE_DETAIL_CONTACT_START,
    UPDATE_DETAIL_CONTACT_SUCCESS,
    UPDATE_DETAIL_CONTACT_ERROR
} from './constants';

const initialState = {
    inputFormData: null,
    contactDetail: null,
    selectedContactId: null,
    error: null
};

const contactPageReducer = (state = initialState, action) => {
    const { type, data, detail, error, id } = action;
    switch (type) {
        case INPUT_DATA_CONTACT_FORM:
            return {
                ...state,
                inputFormData: data
            };
        case RESET_STATE_CONTACT_DETAIL:
            return {
                ...state,
                contactDetail: null
            };
        case GET_DETAIL_CONTACT_START:
            return {
                ...state,
                selectedContactId: id
            };
        case GET_DETAIL_CONTACT_SUCCESS:
            return {
                ...state,
                contactDetail: detail
            };
        case GET_DETAIL_CONTACT_ERROR:
            return {
                ...state,
                error: error
            };
        case UPDATE_DETAIL_CONTACT_START:
            return {
                ...state
            };
        case UPDATE_DETAIL_CONTACT_SUCCESS:
            return {
                ...state,
                inputFormData: data
            };
        case UPDATE_DETAIL_CONTACT_ERROR:
            return {
                ...state,
                error: error
            };
        default:
            return state;
    }
};

export default contactPageReducer;