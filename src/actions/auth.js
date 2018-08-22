import { AUTH_USER, AUTH_ERROR } from './types'

const setUser = token => localStorage.setItem('token', token)
const removeUser = () => localStorage.removeItem('token')

const authUser = payload => ({
  type: AUTH_USER,
  payload
})

const authError = payload => ({
  type: AUTH_ERROR,
  payload
})

const authRequest = async (url, userData) => {
  const response = await fetch(url, {
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

  return data
}

export const startLoginUser = userData => (
  async dispatch => {
    try {
      const { token } = await authRequest('/api/auth/login', userData)

      dispatch(authUser(token))
      dispatch(authError(null))
      setUser(token)

    } catch ({ error }) {
      dispatch(authError(error))
      console.log('Login Error: ', error)
    }
  }
)

export const startRegisterUser = userData => (
  async dispatch => {
    try {
      const { token } = await authRequest('/api/auth/register', userData)

      dispatch(authUser(token))
      dispatch(authError(null))
      setUser(token)

    } catch ({ error }) {
      dispatch(authError(error))
      console.log('Registration Error: ', error)
    }
  }
)

export const logoutUser = () => (
  dispatch => {
    dispatch(authUser(null))
    removeUser()
  }
)
