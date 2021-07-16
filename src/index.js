import React from "react";
import ReactDOM from "react-dom";
//1. Add in all necessary components and libary methods.
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Libraries for Redux middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// Import reducers
import reducer from './reducers/index';

import "./index.css";
import App from "./App";
//2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(logger, thunk));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
//3. Wrap the App component in a react-redux Provider element.<Provider store={store}>
<Provider store={store}>
    <App />
</Provider>, 
rootElement
);