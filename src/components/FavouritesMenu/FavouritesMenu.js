import React from 'react'
import { menu, menuShow, menuHide, menuHideButton } from './favouritesMenu.css'

import FavouritesList from '../FavouritesList/FavouritesList'

export default ({ showMenu, onToggleMenu }) => (
  <menu className={`${showMenu ? menuShow : menuHide} ${menu}`}>
    <button className={menuHideButton} onClick={onToggleMenu}>
      &times;
    </button>
    <FavouritesList/>
  </menu>
)