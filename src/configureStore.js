/*import { createStore } from 'redux';
import reducers from './reducers/';

const configureStore = () => {
	//const persistedState = loadState();
	const persistedState = undefined;
	const store = createStore(
		reducers
		,persistedState
		,window.devToolsExtension ? window.devToolsExtension() : undefined
	);
	return store;
};

export default configureStore;
*/

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}