import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API}`);
            const data = await response.json();
            if (data.Response === 'True') {
                setSearchResult(data);
            } else {
                setSearchResult(null); // or set an appropriate default value
            }
        } catch (error) {
            console.log('Error', error);
            setSearchResult(null); // or set an appropriate default value
        }
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {searchResult && searchResult.Search ? (
                <div>
                    {searchResult.Search.map((item, index) => (
                        <div key={index}>
                            <img
                                src={item.Poster}
                                alt=""
                            />
                            <p>{item.Year}</p>
                            {/* Add other properties you want to display */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results yet</p>
            )}
        </div>
    );
};

export default SearchPage;
