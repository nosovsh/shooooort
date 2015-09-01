import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'Flux/reducers';
import { default as localStoragePersistState } from 'redux-localstorage'; // names clash with redux-devtools
import createLogger from 'redux-logger';

const logger = createLogger({
  predicate: (getState, action) => __DEBUG__, // eslint-disable-line no-unused-vars
});

export default function(initialState) {
  let finalCreateStore;
  const middlewares = [
    thunkMiddleware,
    logger,
  ];
  if ( __DEVTOOLS__ ) {
    const { devTools, persistState } = require('redux-devtools');
    finalCreateStore = compose(
      applyMiddleware(...middlewares),
      localStoragePersistState(),
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
      createStore
    );
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middlewares),
      localStoragePersistState(),
      createStore
    );
  }
  return finalCreateStore(rootReducer, initialState);
}
