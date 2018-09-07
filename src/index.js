import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './Reducers/store';
// import ContactPage from './Views/Containers/ContactPage';
import RingCentralPage from './Views/Containers/RingCentralPage';

ReactDOM.render(
    <Provider store={store}>
        <RingCentralPage />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
