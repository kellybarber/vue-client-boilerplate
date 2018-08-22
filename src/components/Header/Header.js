import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from '../../actions'

class Header extends Component {
  logoutButton = () => {
    const { logoutUser, history } = this.props
    return (
      <button onClick={() => { 
        logoutUser() 
        history.push('/login') 
      }}>
        Logout
      </button>
    )
  }

  authenticatedHeader = () => (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      {this.logoutButton()}
    </div>
  )

  notAuthenticatedHeader = () => (
    <div>
      <Link to='/register'>Sign Up</Link>
      <Link to='/login'>Sign In</Link>
    </div>
  )

  render() {
    const { authenticated } = this.props

    return authenticated ? this.authenticatedHeader() : this.notAuthenticatedHeader()
  }
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default withRouter(connect(mapStateToProps, { logoutUser })(Header))