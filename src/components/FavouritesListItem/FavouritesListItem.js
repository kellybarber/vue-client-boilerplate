import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFavourite } from '../../actions'
import { row, link, button } from './FavouritesListItem.css'

class FavouritesListItem extends Component {
  onRemoveFavourite = () => {
    const { id, removeFavourite } = this.props
    removeFavourite(id)
  }

  render() {
    const { name, url, language, release } = this.props

    return (
      <tr className={row}>
        <td><a className={link} href={url} target='_blank'>{name}</a></td>
        <td>{language}</td>
        <td>{release}</td>
        <td><button className={button} onClick={this.onRemoveFavourite}>Remove</button></td>
      </tr>
    )
  }
}

export default connect(null, { removeFavourite })(FavouritesListItem)