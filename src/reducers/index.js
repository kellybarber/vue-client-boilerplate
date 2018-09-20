import { combineReducers } from 'redux'
import repos from './repos'
import favourites from './favourites'

export default combineReducers({
  repos,
  favourites
})