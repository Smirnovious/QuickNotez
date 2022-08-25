import React from 'react'
import {FiSearch} from 'react-icons/fi'
const SearchBar = ({handleSearchNote}) => {


  return (
    <div className='search-bar'>
        <FiSearch className='search-icon' size='1.3em'/>
        <input onChange = {(e)=> handleSearchNote(e.target.value)} type="text" placeholder="Search..." />
    </div>
  )
}

export default SearchBar