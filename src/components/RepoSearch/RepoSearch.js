import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories } from '../../actions'
import { container } from './RepoSearch.css'

import RepoSearchForm from '../RepoSearchForm/RepoSearchForm'
import RepoSearchList from '../RepoSearchList/RepoSearchList'

class RepoSearch extends Component {
  state = { searchTerm: '' }

  onSearchChange = e => {
    const searchTerm = e.target.value
    this.setState({ searchTerm })
  }

  onSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state
    const { getRepositories } = this.props
    
    getRepositories(searchTerm)
  }
 
  render() {
    const { searchTerm } = this.state

    return (
      <div className={container}>
        <RepoSearchForm searchTerm={searchTerm} onSearchChange={this.onSearchChange} onSubmit={this.onSubmit}/>
        <RepoSearchList/>
      </div>
    )
  }
}

export default connect(null, { getRepositories })(RepoSearch)