import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.authenticated
      ? <Component {...props}/>
      : <Redirect to='/login' />
  )} />
)

const Public = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !rest.authenticated
      ? <Component {...props}/>
      : <Redirect to='/dashboard' />
  )} />
)

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export const PrivateRoute = connect(mapStateToProps)(Private)
export const PublicRoute  = connect(mapStateToProps)(Public)