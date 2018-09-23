import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavourite, removeFavourite } from '../../actions'
import { row, link, button } from './ReposListItem.css'

class ReposListItem extends Component {
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
      <tr className={row}>
        <td><a className={link} href={url} target='_blank'>{name}</a></td>
        <td>{language}</td>
        <td>{release}</td>
        <td>
          <button className={button} onClick={this.onFavourite}>
            {favourite ? 'Remove' : 'Add'}
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = ({ favourites }, { id }) => {
  const favourite = favourites.find(favourite => { return favourite.id === id }) ? true : false
  return ({ favourite })
}

export default connect(mapStateToProps, { addFavourite, removeFavourite })(ReposListItem)