import { AUTH_USER } from './types'

export const startRegisterUser = userData => (
  async dispatch => {
    try {
      console.log(userData)

      // let response = await fetch('/auth/register', {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     userData
      //   })
      // })

      // const data = await response.json()

      // console.log(data)

    } catch (error) {
      console.log('Registration Error', error)
    }
  }
)