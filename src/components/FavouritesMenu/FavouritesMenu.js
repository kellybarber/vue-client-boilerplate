import React from 'react'
import { connect } from 'react-redux'
import { menu, menuShow, menuHide, menuHideButton } from './favouritesMenu.css'

import FavouritesList from '../FavouritesList/FavouritesList'

const FavouritesMenu = ({ showMenu, onToggleMenu, hasFavourites }) => (
  <menu className={`${showMenu ? menuShow : menuHide} ${menu}`}>
    <button className={menuHideButton} onClick={onToggleMenu}>
      &times;
    </button>
    {hasFavourites
      ? <FavouritesList/>
      : <div>No Favourites</div>
    }
    
  </menu>
)

const mapStateToProps = ({ favourites }) => {
  const hasFavourites = favourites[1] === undefined ? false : true

  return({ hasFavourites })
}

export default connect(mapStateToProps)(FavouritesMenu)