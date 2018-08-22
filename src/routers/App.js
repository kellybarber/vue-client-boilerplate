import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
// import Logout from '../components/Logout/Logout'

export default () => (
  <BrowserRouter>
    <div className='app-container'>
      <Header/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </div>
  </BrowserRouter>
)