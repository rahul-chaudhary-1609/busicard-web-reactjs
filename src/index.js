import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

import allReducers from "./components/redux/reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
// import reduxThunk from 'redux-thunk';

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);

		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.log(err);
	}
};

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};


const persistedState = loadState();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
  allReducers,
	persistedState,
	// composeEnhancers(applyMiddleware(reduxThunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

