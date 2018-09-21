import React from 'react'
import Header from '../Header/Header'
import { background } from './Dashboard.css'

import RepoSearch from '../RepoSearch/RepoSearch'
import Favourites from '../Favourites/Favourites'
   
export default () => (
  <div className={background}>
    <Favourites/>
    <RepoSearch/>
  </div>
)