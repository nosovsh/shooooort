import 'babel-core/polyfill'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import moment from 'moment';

import App from 'Components/App/App';
import configureStore from 'Flux/store/configureStore';

moment.locale("en");

const store = configureStore()

window.React = React; // enable debugger

export default class Root extends Component {
  render() {
    const elements = [
      <Provider store={store} key="provider">
        {() => <App /> }
      </Provider>
    ];
    if (__DEVTOOLS__) {
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      elements.push(
        <DebugPanel top right bottom key="debugPanel">
          <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
      );
    }
    return (
      <div>
        { elements }
      </div>
    );
  }
}

React.render(
  <Root />,
  document.getElementById('root')
);
