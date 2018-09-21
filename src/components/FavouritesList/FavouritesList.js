import React from 'react' 
import { connect } from 'react-redux'
import { table } from './FavouritesList.css'

import FavouritesListItem from '../FavouritesListItem/FavouritesListItem'

const FavouritesList = ({ favourites }) => (
  <table className={table}>
    <thead>
      <tr>
        <td>Name</td>
        <td>Language</td>
        <td>Latest Tag</td>
        <td>Favourite</td>
      </tr>
    </thead>
    <tbody>
      {favourites.map(favourite => {
        return <FavouritesListItem key={favourite.id} {...favourite}/>
      })}
    </tbody>
  </table>
)

const mapStateToProps = ({ favourites }) => ({ favourites })

export default connect(mapStateToProps)(FavouritesList)