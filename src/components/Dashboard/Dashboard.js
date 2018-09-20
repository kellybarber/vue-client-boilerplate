import React from 'react'
import Header from '../Header/Header'
import RepoContainer from '../RepoContainer/RepoContainer'
import { background } from './Dashboard.css'

export default () => (
  <div className={background}>
    <RepoContainer/>
  </div>
)