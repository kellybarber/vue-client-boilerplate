import React, { Component } from 'react'
import { connect } from 'react-redux'
import { table } from './RepoSearchList.css'

import RepoListItem from '../RepoListItem/RepoListItem'
 
class RepoSearchList extends Component {
  render() {
    const { repos } = this.props
    const show = Object.keys(repos)[0] !== undefined
    // const show = true

    if (show) {
      return (
        <table className={table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Latest Tag</th>
              <th>Favourite</th>
            </tr>
          </thead>
          <tbody>
            {repos.repositories.map(repo => {
              return <RepoListItem key={repo.id} {...repo}/>
            })}
          </tbody>
        </table>
      )
    } else {
      return null
    } 
  }
}

const mapStateToProps = ({ repos }) => ({ repos })

export default connect(mapStateToProps)(RepoSearchList)