import React from 'react'
import { background } from './Dashboard.css'

import Title from '../Title/Title'
import Repos from '../Repos/Repos'
import Favourites from '../Favourites/Favourites'
   
export default () => (
  <div className={background}>
    <Title/>
    <Favourites/>
    <Repos/>
  </div>
)