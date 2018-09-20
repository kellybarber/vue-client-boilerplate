import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import setupMiddleware from './helpers/setupMiddleware'
import './styles/main.css'

import Dashboard from './components/Dashboard/Dashboard'

const store = createStore(
  rootReducer,
  applyMiddleware(...setupMiddleware())
)

const app = (
  <Provider store={store}>
    <Dashboard/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))