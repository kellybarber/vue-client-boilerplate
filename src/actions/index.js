import { getReposQuery } from '../queries'
import { ADD_REPOS, CLEAR_REPOS, ADD_FAVOURITE, REMOVE_FAVOURITE } from './types'
import { normalizeReposData } from '../helpers/normalizeResponse'

const URL = 'https://api.github.com/graphql'
const AUTH = { Authorization: `bearer ${process.env.GITHUB_TOKEN}` }

const addRepositories = payload => ({
  type: ADD_REPOS,
  payload
})

export const getRepositories = searchTerm => (
  async dispatch => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: AUTH,
        body: JSON.stringify({ 
          query: getReposQuery,
          variables: { "organization": searchTerm } 
        })
      })

      const data = await response.json()

      const normalizedData = normalizeReposData(data)

      dispatch(addRepositories(normalizedData))
      
    } catch (error) {
      console.log('Get Repositories Error: ', error)
    }
  }
)

export const clearRepositories = () => ({
  type: CLEAR_REPOS
})


export const addFavourite = favourite => ({
  type: ADD_FAVOURITE,
  payload: favourite
})

export const removeFavourite = id => ({
  type: REMOVE_FAVOURITE,
  payload: id
})