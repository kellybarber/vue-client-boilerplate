import React from 'react'
import { form, input, button } from './ReposSearch.css'

const ReposSearch = ({ searchTerm, onSearchChange, onSubmit }) => (
  <form className={form} onSubmit={onSubmit}>
    <input 
      className={input}
      placeholder='Search'
      type='text'
      value={searchTerm}
      onChange={onSearchChange}
    />
    <button className={button}>Search</button>
  </form>
)

export default ReposSearch