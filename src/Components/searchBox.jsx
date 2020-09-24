import React from 'react';
import '../card-styles.css'

const SearchBox = ({ placeholder, searchHandler}) => {
    return(
        <input type='search' placeholder={placeholder}
        onChange={searchHandler} className='search'/>
    )
}

export default SearchBox
