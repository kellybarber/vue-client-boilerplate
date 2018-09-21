import React, { Component } from 'react'
import { connect } from 'react-redux'
import { table } from './RepoSearchList.css'

import RepoListItem from '../RepoListItem/RepoListItem'
 
class RepoSearchList extends Component {
  render() {
    const { repos } = this.props
    const show = Object.keys(repos)[0] !== undefined

    if (show) {
      return (
        <table className={table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Language</td>
              <td>Latest Tag</td>
              <td>Favourite</td>
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