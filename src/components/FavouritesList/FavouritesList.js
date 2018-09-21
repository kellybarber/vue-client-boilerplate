import React from 'react' 
import { connect } from 'react-redux'
import { table, head, title } from './FavouritesList.css'

import FavouritesListItem from '../FavouritesListItem/FavouritesListItem'

const FavouritesList = ({ favourites }) => (
  <table className={table}>
    <thead className={head}>
      <tr>
        <td className={title}>Name</td>
        <td className={title}>Language</td>
        <td className={title}>Latest Tag</td>
        <td className={title}>Favourite</td>
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