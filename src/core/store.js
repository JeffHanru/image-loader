import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
export * from './service-worker'

// todo: using es6 here?
export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
