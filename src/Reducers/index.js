import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from '../Views/Containers/ContactPage/reducers';
import RingCentralReducer from '../Views/Containers/RingCentralPage/reducers';
const rootReducer = combineReducers({
  form: formReducer,
  contact: contactReducer,
  ringCentral: RingCentralReducer
});

export default rootReducer;