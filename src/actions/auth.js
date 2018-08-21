import { AUTH_USER, AUTH_ERROR } from './types'

const setUser = token => {
  localStorage.setItem('token', token)
}

const authUser = payload => ({
  type: AUTH_USER,
  payload
})

const authError = payload => ({
  type: AUTH_ERROR,
  payload
})

export const startRegisterUser = userData => (
  async dispatch => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userData
        })
      })

      const data = await response.json()

      if (!response.ok) throw data

      dispatch(authUser(data.token))
      setUser(data.token)

    } catch ({ error }) {
      dispatch(authError(error))
      console.log('Registration Error', error)
    }
  }
)