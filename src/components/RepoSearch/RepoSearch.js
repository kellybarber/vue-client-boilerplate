import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepositories } from '../../actions'

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
      <form onSubmit={this.onSubmit}>
        <input 
          placeholder='Search'
          type='text'
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <button>Search</button>
      </form>
    )
  }
}

export default connect(null, { getRepositories })(RepoSearch)