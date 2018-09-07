import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from '../Views/Containers/ContactPage/reducers';
import ringCentralReducer from '../Views/Containers/RingCentralPage/reducers';
import loginReducer from '../Views/Containers/LoginPage/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  contact: contactReducer,
  ringCentral: ringCentralReducer
});

export default rootReducer;