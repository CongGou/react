import React from 'react';
import ReactDOM from 'react-dom';
import {
    // BrowserRouter
    HashRouter
} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(
    Reducers,
    applyMiddleware( thunk )
);

ReactDOM.render(
    <HashRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);


serviceWorker.unregister();
