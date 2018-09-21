import React, { Component } from 'react'
import FavouritesButton from '../FavouritesButton/FavouritesButton'
import FavouritesMenu from '../FavouritesMenu/FavouritesMenu'

class Favourites extends Component {
  state = { showMenu: false }

  onToggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  render() {
    return (
      <div>
        <FavouritesButton onToggleMenu={this.onToggleMenu}/>
        <FavouritesMenu/>
      </div>
    )
  }
}

export default Favourites