import { AUTH_USER } from '../actions/types'

export default (state={}, { type, payload }) => {
  switch(type) {
    case AUTH_USER:
      return { ...state, authenticated: payload }
    default: 
      return state
  }
}