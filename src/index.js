import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import App from './routers/App'
import './styles/base'

// const mode = process.env.NODE_ENV

const middleware = [ thunk, logger ]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))