import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './routers/App'
import setupMiddleware from './helpers/setupMiddleware'
import './styles/base'

const store = createStore(
  rootReducer,
  applyMiddleware(...setupMiddleware())
)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))