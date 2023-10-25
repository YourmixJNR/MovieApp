import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const queryTerm = localStorage.getItem("searchQuery");

        if (queryTerm) {
            setQuery(queryTerm);
            handleSearch(queryTerm);
        }
    }, []);

    const handleSearch = async (query) => {
        localStorage.setItem("searchQuery", query);

        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API}`);
            const data = await response.json();
            if (data.Response === 'True') {
                setSearchResult(data);
            } else {
                setSearchResult(null);
            }
        } catch (error) {
            console.log('Error', error);
            setSearchResult(null);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={() => handleSearch(query)}>Search</button>

            <div>
                {searchResult && searchResult.Search ? (
                    <div>
                        {searchResult.Search.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={item.Poster}
                                    alt=""
                                />
                                <p>{item.Year}</p>
                                <Link to={`/${item.imdbID}`}>Details</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results yet</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;