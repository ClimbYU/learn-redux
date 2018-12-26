import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import { compose } from 'redux'
// import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from './mini-redux/mini-redux'
import Provider from './mini-redux/mini-redux-react'
import thunk from './mini-redux/mini-thunk'
import './index.css';
import App from './App';
import reducers from './redux/reducer'
import * as serviceWorker from './serviceWorker';


// const store = createStore(reducers, compose(
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
