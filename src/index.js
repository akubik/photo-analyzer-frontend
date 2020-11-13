import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import reducer from './store/reducer';

const logger = store => {
  return next => action => {
    console.log('Dispatching', action);
    return next(action);
  }
};

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnchancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

