import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { unregister } from './core'
import { Provider } from 'react-redux'
import { configureStore, history } from './core'
import { Switch, Route } from 'react-router-dom'
import { App, NotFound } from './core/components'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

unregister()
