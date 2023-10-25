import React from "react";
import { Link } from "react-router-dom";

const MovieSearchResult = ({ searchResult }) => {
  return (
    <div>
      {searchResult &&
        searchResult.Search.map((item, index) => (
          <div key={index}>
            <img src={item.Poster} alt="" />
            <p>{item.Year}</p>
            <Link to={`/${item.imdbID}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MovieSearchResult;
