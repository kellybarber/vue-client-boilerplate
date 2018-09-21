import React from 'react'
import { background } from './Dashboard.css'

import Title from '../Title/Title'
import RepoSearch from '../RepoSearch/RepoSearch'
import Favourites from '../Favourites/Favourites'
   
export default () => (
  <div className={background}>
    <Title/>
    <Favourites/>
    <RepoSearch/>
  </div>
)