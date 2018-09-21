import React, { Component } from 'react'

class FavouritesListItem extends Component {
  render() {
    const { name, url, language, release } = this.props

    return (
      <tr>
        <td><a href={url}>{name}</a></td>
        <td>{language}</td>
        <td>{release}</td>
        {/* <td><RepoListItemButton favourite={favourite} onFavourite={this.onFavourite}/></td> */}
      </tr>
    )
  }
}

export default FavouritesListItem