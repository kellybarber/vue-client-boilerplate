import React, { Component } from 'react'
import { connect } from 'react-redux'

class RepoSearchList extends Component {
  render() {
    const { repos } = this.props
    const show = Object.keys(repos)[0] !== undefined

    if (show) {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Latest Tag</th>
            </tr>
          </thead>
        </table>
      )
    } else {
      return null
    } 
  }
}

const mapStateToProps = ({ repos }) => ({ repos })

export default connect(mapStateToProps)(RepoSearchList)