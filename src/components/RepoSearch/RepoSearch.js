import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories, clearRepositories } from '../../actions'
import { container } from './RepoSearch.css'

import RepoSearchForm from '../RepoSearchForm/RepoSearchForm'
import RepoList from '../RepoList/RepoList'

class RepoSearch extends Component {
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
        <RepoSearchForm searchTerm={searchTerm} onSearchChange={this.onSearchChange} onSubmit={this.onSubmit}/>
        <RepoList searchTerm={searchTerm}/>
      </div>
    )
  }
}

export default connect(null, { getRepositories, clearRepositories })(RepoSearch)