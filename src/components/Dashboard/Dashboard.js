import React from 'react'
import Header from '../Header/Header'
import { paragraph } from './Dashboard.css'

export default () => (
  <div>
    <Header/>
    <p className={paragraph}>This is the Dashboard</p>
  </div>
)