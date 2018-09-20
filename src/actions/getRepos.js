import { getReposQuery } from '../queries'

const URL = 'https://api.github.com/graphql'
const AUTH = { Authorization: `bearer ${process.env.GITHUB_TOKEN}` }

export const getRepositories = () => (
  async dispatch => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: AUTH,
        body: JSON.stringify({ 
          query: getReposQuery,
          variables: { "organization": "shopify" } 
        })
      })

      const data = await response.json()

      console.log('DATA:', data)
      
    } catch (error) {
      console.log('Get Repositories Error: ', error)
      
    }
  }
)