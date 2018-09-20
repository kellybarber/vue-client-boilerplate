
const URL = 'https://api.github.com/graphql'
const AUTH = { Authorization: `bearer 4a9c4d91c5aeeceb8683fa95bb6d0b59efc15b02` }

const QUERY = `{
  organization(login: "shopify") {
    name
    url
    repositories(first: 10) {
      edges {
        node {
          nameWithOwner
          url
          primaryLanguage {
            name
          }
          releases(last: 1) {
          	edges {
              node {
                tag {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}`

export const getRepositories = () => (
  async dispatch => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: AUTH,
        body: JSON.stringify({ query: QUERY })
      })

      const data = await response.json()

      console.log('DATA:', data)
      
    } catch (error) {
      console.log('Get Repositories Error: ', error)
      
    }
  }
)