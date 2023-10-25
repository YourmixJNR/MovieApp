import React, { useState, useEffect } from "react";
import MovieSearchResult from "../components/MovieSearchResult";
import "../App.css";

const MovieSearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const queryTerm = localStorage.getItem("searchQuery");

    if (queryTerm) {
      setQuery(queryTerm);
      handleMovieSearch(queryTerm);
    }
  }, []);

  const clearResult = () => {
    setSearchResult(null);
    setQuery("");
    localStorage.removeItem("searchQuery");
  };

  const handleMovieSearch = async (query) => {
    localStorage.setItem("searchQuery", query);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API}`
      );
      const data = await response.json();
      if (data.Error || data.Search === undefined) {
        setSearchResult("No Result Found");
      } else {
        setSearchResult(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Find Your Next Gem 🎬</h1>
            <p className="lead text-body-secondary">
              Let's embark on a cinematic adventure together! Search for your
              next movie and get ready for an unforgettable experience.
            </p>
            <p>
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="ex. Jajagun"
              />
              <br />
              <button
                className="btn btn-primary my-2 me-2"
                onClick={() => handleMovieSearch(query)}
              >
                Search
              </button>
              <button className="btn btn-secondary my-2" onClick={clearResult}>
                Clear Result
              </button>
            </p>
          </div>
        </div>
      </section>

      {searchResult !== "No Result Found" ? (
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <MovieSearchResult searchResult={searchResult} />
          </div>
        </div>
      ) : (
        <p className="noResult"> Oops No results found</p>
      )}
    </div>
  );
};

export default MovieSearchPage;
