import 'babel-core/polyfill'
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from 'Components/App/App';
import configureStore from 'Flux/store/configureStore';



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
