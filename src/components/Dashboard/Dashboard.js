import React from 'react'
import Header from '../Header/Header'
import RepoSearch from '../RepoSearch/RepoSearch'
import { background } from './Dashboard.css'

export default () => (
  <div className={background}>
    <RepoSearch/>
  </div>
)