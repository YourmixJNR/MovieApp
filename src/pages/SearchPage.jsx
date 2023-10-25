import React, { useState, useEffect } from 'react';
import MovieSearchResult from '../components/SearchResult';

const MovieSearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const queryTerm = localStorage.getItem("searchQuery");

        if(queryTerm) {
            setQuery(queryTerm);
            handleMovieSearch(queryTerm);
        }
    }, []);

    const handleMovieSearch = async (query) => {
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
            <button onClick={() => handleMovieSearch(query)}>Search</button>
            
            <MovieSearchResult searchResult={searchResult} />
        </div>
    );
};

export default MovieSearchPage;