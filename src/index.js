import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './Reducers/store';
import ContactPage from './Views/Containers/ContactPage';

ReactDOM.render(
    <Provider store={store}>
        <ContactPage />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
