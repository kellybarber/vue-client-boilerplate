import React from 'react'
import { link } from './Link.css'

export default () => (
  <a 
    className={link} 
    href='https://github.com/kellybarber/github-favourites'
    target='_blank'
  >
    View on <span>Github</span>
  </a>
)