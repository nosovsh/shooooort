import React, { Component } from 'react';
import App from 'Components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'Flux/reducers';

const store = createStore(rootReducer);

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
