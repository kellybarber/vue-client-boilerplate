import { ADD_REPOS, CLEAR_REPOS } from "../actions/types";

export default (state={}, { type, payload }) => {
  switch(type) {
    case ADD_REPOS:
      return payload
    case CLEAR_REPOS:
      return {}
    default:
      return state
  }
}