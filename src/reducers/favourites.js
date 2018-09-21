import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions/types";

export default (state=[], { type, payload }) => {
  switch(type) {
    case ADD_FAVOURITE:
      return [ ...state, payload ]
    case REMOVE_FAVOURITE:
      return state.filter(({ id }) => id !== payload)
    default:
      return state
  }
}