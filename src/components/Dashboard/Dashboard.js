import React from 'react'
import { background } from './Dashboard.css'

import Title from '../Title/Title'
import Repos from '../Repos/Repos'
import Favourites from '../Favourites/Favourites'
import Link from '../Link/Link'
   
export default () => (
  <div className={background}>
    <Title/>
    <Favourites/>
    <Repos/>
    <Link/>
  </div>
)