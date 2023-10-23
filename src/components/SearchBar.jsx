import React from 'react'
import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        // do something with searchQuery here...
        setQuery(event.target.value);
    }

    const handleSearch = () => {
        onSearch(query);
    }

  return (
    <div>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
      />

      <button onClick={handleSearch}>Search</button>

    </div>
  )
}

export default SearchBar;
