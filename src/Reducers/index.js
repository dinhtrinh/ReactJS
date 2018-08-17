import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from '../Views/Containers/ContactPage/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  contact: contactReducer
});

export default rootReducer;