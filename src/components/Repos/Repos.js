import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories, clearRepositories } from '../../actions'
import { container } from './Repos.css'

import ReposSearch from '../ReposSearch/ReposSearch'
import ReposList from '../ReposList/ReposList'

class Repos extends Component {
  state = { searchTerm: '' }

  onSearchChange = e => {
    const searchTerm = e.target.value
    this.setState({ searchTerm })

    if (searchTerm === '') this.props.clearRepositories()  
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.getRepositories(this.state.searchTerm)
  }
 
  render() {
    const { searchTerm } = this.state
    
    return (
      <div className={container}>
        <ReposSearch searchTerm={searchTerm} onSearchChange={this.onSearchChange} onSubmit={this.onSubmit}/>
        <ReposList searchTerm={searchTerm}/>
      </div>
    )
  }
}

export default connect(null, { getRepositories, clearRepositories })(Repos)