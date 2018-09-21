import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavourite, removeFavourite } from '../../actions'

import RepoListItemButton from '../RepoListItemButton/RepoListItemButton'

class RepoListItem extends Component {
  onFavourite = () => {
    const { id, name, url, language, release, favourite, addFavourite, removeFavourite } = this.props

    if (!favourite) {
      addFavourite({ id, name, url, language, release })
    } else {
      removeFavourite(id)
    }
  }

  render() {
    const { name, url, language, release, favourite } = this.props

    return (
      <tr>
        <td><a href={url}>{name}</a></td>
        <td>{language}</td>
        <td>{release}</td>
        <td>
          <RepoListItemButton favourite={favourite} onFavourite={this.onFavourite}/> 
        </td>
      </tr>
    )
  }
}

const mapStateToProps = ({ favourites }, { id }) => {
  const favourite = favourites.find(favourite => { return favourite.id === id }) ? true : false
  return ({ favourite })
}

export default connect(mapStateToProps, { addFavourite, removeFavourite })(RepoListItem)