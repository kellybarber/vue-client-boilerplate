import { AUTH_USER } from './types'

export const startRegisterUser = userData => (
  async dispatch => {
    try {
      let response = await fetch('/api/auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userData
        })
      })

      const data = await response.json()

      console.log(data)

    } catch (error) {
      console.log('Registration Error', error)
    }
  }
)