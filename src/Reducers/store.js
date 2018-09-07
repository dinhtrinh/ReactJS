import { createStore, applyMiddleware, compose } from 'redux';
import CreateSagaMiddleWare from 'redux-saga';
import sagas from './sagas';
import rootReducer from './index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = CreateSagaMiddleWare();

const user = localStorage.getItem('userInformation') ? JSON.parse(localStorage.getItem('userInformation')) : null;
const initialState = {
    login: {
        userInformation: user,
        isLoggedIn: user ? true : false
    }
};
const middleware = [
    sagaMiddleWare
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, initialState, enhancers);
sagaMiddleWare.run(sagas);