import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
// import thunk from 'redux-thunk'
import {createStore, applyMiddleware,compose} from './mini-redux'
import Provider from './mini-redux-react'
import thunk from './mini-thunk'
import './index.css';
import App from './App';
import reducers from './reducer'
import * as serviceWorker from './serviceWorker';


// const store = createStore(reducers,compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// ))
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
