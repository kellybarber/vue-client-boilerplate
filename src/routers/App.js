import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
  </BrowserRouter>
)