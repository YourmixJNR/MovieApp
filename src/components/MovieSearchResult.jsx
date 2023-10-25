import React from "react";
import { Link } from "react-router-dom";

const MovieSearchResult = ({ searchResult }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {searchResult &&
        searchResult.Search.map((item, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <img src={item.Poster} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">Year: {item.Year}</p>
                <Link to={`/${item.imdbID}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieSearchResult;
