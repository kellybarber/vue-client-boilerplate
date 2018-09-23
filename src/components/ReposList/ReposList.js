import React, { Component } from 'react'
import { connect } from 'react-redux'
import { table, head, title } from './ReposList.css'

import ReposListItem from '../ReposListItem/ReposListItem'
 
class ReposList extends Component {
  render() {
    const { repos } = this.props
    const show = Object.keys(repos)[0] !== undefined

    if (show) {
      return (
        <table className={table}>
          <thead className={head}>
            <tr>
              <td className={title}>Name</td>
              <td className={title}>Language</td>
              <td className={title}>Latest Tag</td>
              <td className={title}>Favourite</td>
            </tr>
          </thead>
          <tbody>
            {repos.repositories.map(repo => {
              return <ReposListItem key={repo.id} {...repo}/>
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

export default connect(mapStateToProps)(ReposList)