import React from 'react'
import { menuShow, menuHide } from './favouritesMenu.css'

export default ({ showMenu }) => (
  <menu className={showMenu ? menuShow : menuHide}>
    
  </menu>
)