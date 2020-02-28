import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { Provider } from 'react-redux'
import { configureStore } from './core'
import App from './core/components/originalApp'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

unregister()
