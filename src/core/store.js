import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/rootReducer'
export * from './service_worker'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
)

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
