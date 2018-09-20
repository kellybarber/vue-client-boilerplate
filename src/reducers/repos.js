import { ADD_REPOS } from "../actions/types";

export default (state={}, { type, payload }) => {
  switch(type) {
    case ADD_REPOS:
      return payload
    default:
      return state
  }
}