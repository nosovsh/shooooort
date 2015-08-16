import React, { Component } from 'react';
import App from 'Components/App/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'Flux/reducers';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

let createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

let store = createStoreWithMiddleware(rootReducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App /> }
      </Provider>
    );
  }
}

React.render(
  <Root />,
  document.getElementById('root')
);
