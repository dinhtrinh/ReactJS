import {
    INPUT_DATA_CONTACT_FORM,
    RESET_STATE_CONTACT_DETAIL,
    GET_DETAIL_CONTACT_START,
    GET_DETAIL_CONTACT_SUCCESS,
    GET_DETAIL_CONTACT_ERROR,
    UPDATE_DETAIL_CONTACT_START,
    UPDATE_DETAIL_CONTACT_SUCCESS,
    UPDATE_DETAIL_CONTACT_ERROR
} from './constants';

export const inputDataContactForm = (data) => ({
    type: INPUT_DATA_CONTACT_FORM,
    data
});

export const resetStateContactDetail = () => ({
    type: RESET_STATE_CONTACT_DETAIL
})

export const getDetailContactStart = (id) => ({
    type: GET_DETAIL_CONTACT_START,
    id
})

export const getDetailContactSuccess = (detail) => ({
    type: GET_DETAIL_CONTACT_SUCCESS,
    detail
})

export const getDetailContactError = (error) => ({
    type: GET_DETAIL_CONTACT_ERROR,
    error
})

export const updateDetailContactStart = (data) => ({
    type: UPDATE_DETAIL_CONTACT_START,
    data
})

export const updateDetailContactSuccess = (data) => ({
    type: UPDATE_DETAIL_CONTACT_SUCCESS,
    data
})

export const updateDetailContactError = (error) => ({
    type: UPDATE_DETAIL_CONTACT_ERROR,
    error
})


