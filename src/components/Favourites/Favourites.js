import React, { Component } from 'react'
import { favourites } from './Favourites.css'

import FavouritesButton from '../FavouritesButton/FavouritesButton'
import FavouritesMenu from '../FavouritesMenu/FavouritesMenu'

class Favourites extends Component {
  state = { showMenu: false }

  onToggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  render() {
    const { showMenu } = this.state

    return (
      <div className={favourites}>
        <FavouritesButton onToggleMenu={this.onToggleMenu}/>
        <FavouritesMenu showMenu={showMenu}/>
      </div>
    )
  }
}

export default Favourites