// MovieSearchPage component
import React, { useState, useEffect } from 'react';
import MovieSearchResult from '../components/MovieSearchResult';

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

    const clearResult = () => {
        setSearchResult(null);
        setQuery('');
        localStorage.removeItem("searchQuery");
    };

    const handleMovieSearch = async (query) => {
        localStorage.setItem("searchQuery", query);

        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API}`);
            const data = await response.json();
            if (data.Error || data.Search === undefined) {
                setSearchResult('No Result Found');
            } else {
                setSearchResult(data);
            }
        } catch (error) {
            console.log('Error', error);
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
            <button onClick={clearResult}>Clear Result</button>
            
            {searchResult !== 'No Result Found' ? (
                <MovieSearchResult searchResult={searchResult} />
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default MovieSearchPage;
