import 'babel-core/polyfill'
import React, { Component } from 'react';
import App from 'Components/App/App';
import configureStore from 'Flux/store/configureStore'

import { Provider } from 'react-redux';

const store = configureStore()

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
