import React from 'react'
import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        // do something with searchQuery here...
        setSearchQuery(event.target.value);
    }

    const handleSearch = () => {
        onSearch(searchQuery);
    }

  return (
    <div>

      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />

      <button onClick={handleSearch}>Search</button>

    </div>
  )
}

export default SearchBar;
