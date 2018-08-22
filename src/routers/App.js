import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../helpers/routing'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Dashboard from '../components/Dashboard/Dashboard'

export default () => (
  <BrowserRouter>
    <div className='app-container'>
      <Header/>
      <Switch>
        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
)