import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.authenticated
      ? <Component {...props}/>
      : <Redirect to='/login' />
  )} />
)

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default connect(mapStateToProps)(PrivateRoute)