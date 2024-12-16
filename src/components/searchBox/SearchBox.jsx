import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center p-md-2'>
        <CiSearch />
       <input type="text" placeholder='Search...'/>
        
    </div>
  )
}

export default SearchBox