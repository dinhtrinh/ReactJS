import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './Reducers/store';
import AppRoute from './AppRoute';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
