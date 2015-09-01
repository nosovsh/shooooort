import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'Flux/reducers';
import { default as localStoragePersistState } from 'redux-localstorage'; // names clash with redux-devtools

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

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
