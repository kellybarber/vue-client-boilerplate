import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../helpers/PrivateRoute'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Dashboard from '../components/Dashboard/Dashboard'

export default () => (
  <BrowserRouter>
    <div className='app-container'>
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
)