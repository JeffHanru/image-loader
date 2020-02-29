import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/rootReducer'
export * from './service_worker'

export const history = createBrowserHistory()

// todo: using es6 here?
export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  )
  return store
}
