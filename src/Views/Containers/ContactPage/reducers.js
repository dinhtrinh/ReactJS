import {
    INPUT_DATA_CONTACT_FORM
} from './constants';

const initialState = {
    inputFormData: null
};

const contactPageReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case INPUT_DATA_CONTACT_FORM:
            return {
                ...state,
                inputFormData: data
            };
        default:
            return state;
    }
};

export default contactPageReducer;