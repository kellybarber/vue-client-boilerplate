import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !rest.authenticated
      ? <Component {...props}/>
      : <Redirect to='/dashboard' />
  )} />
)

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default connect(mapStateToProps)(PublicRoute)