import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories } from '../../actions'
import Header from '../Header/Header'
import { paragraph } from './Dashboard.css'

class Dashboard extends Component {
  render() {
    const { getRepositories } = this.props

    return (
      <div>
        <Header/>
        <button onClick={getRepositories}>Get Repos</button>
      </div>
    )
  }
}

export default connect(null, { getRepositories })(Dashboard)