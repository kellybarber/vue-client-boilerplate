import React from 'react'
import RepoSearch from '../RepoSearch/RepoSearch'
import RepoList from '../RepoList/RepoList'
import { container } from './RepoContainer.css'

export default () => (
  <div className={container}>
    <RepoSearch/>
    <RepoList/>
  </div>
)