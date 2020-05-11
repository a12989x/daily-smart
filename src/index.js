import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

import './scss/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(
    compose(
        (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
            createStore
        )
    )
);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
