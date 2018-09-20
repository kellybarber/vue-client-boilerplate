import React from 'react'
import { form, input, button } from './RepoSearchForm.css'

const RepoSearchForm = ({ searchTerm, onSearchChange, onSubmit }) => (
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

export default RepoSearchForm