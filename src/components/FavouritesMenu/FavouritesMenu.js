import React from 'react'
import { menu, menuShow, menuHide } from './favouritesMenu.css'

import FavouritesList from '../FavouritesList/FavouritesList'

export default ({ showMenu }) => (
  <menu className={`${showMenu ? menuShow : menuHide} ${menu}`}>
    <FavouritesList/>
  </menu>
)