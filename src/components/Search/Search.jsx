import React from 'react'
import './index.scss'
import search from '../../assets/search.svg'
import profile from '../../assets/profile.svg'
import favorites from '../../assets/favorites.svg'

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <img src={search} alt="search icon" className='search__search-icon' />
        <input type="text" placeholder='Search' />
      </div>
      <img src={profile} alt="profile icon" />
      <img src={favorites} alt="favorites icon" />  
    </div>
  )
}

export default Search