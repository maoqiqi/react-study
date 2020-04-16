import React, {useRef} from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  console.log('Search==>', '===========================================')
  const searchInput = useRef(null)
  return (
    <div className='search'>
      <strong>Search Github Users</strong>
      <input type="text" placeholder="Enter the name you search" ref={searchInput}/>
      <button onClick={() => props.refreshName(searchInput.current.value)}>Search</button>
    </div>
  )
}

Search.prototype = {
  refreshName: PropTypes.func.isRequired,
}

export default Search