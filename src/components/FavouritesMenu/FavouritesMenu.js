import React from 'react'
import { connect } from 'react-redux'
import { menu, menuShow, menuHide, menuHideButton, noFavourites } from './FavouritesMenu.css'

import FavouritesList from '../FavouritesList/FavouritesList'

const FavouritesMenu = ({ showMenu, onToggleMenu, hasFavourites }) => (
  <menu className={`${showMenu ? menuShow : menuHide} ${menu}`}>
    <button className={menuHideButton} onClick={onToggleMenu}>
      &times;
    </button>
    {hasFavourites
      ? <FavouritesList/>
      : <div className={noFavourites}>No Favourites</div>
    }
    
  </menu>
)

const mapStateToProps = ({ favourites }) => {
  const hasFavourites = favourites[0] === undefined ? false : true
  return({ hasFavourites })
}

export default connect(mapStateToProps)(FavouritesMenu)