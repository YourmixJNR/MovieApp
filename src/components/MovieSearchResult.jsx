import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieSearchResult = ({ searchResult }) => {
  let getTitle = (item) => {
    const title = item.Title.split('\n')[0];
    if (title.length > 25) {
      return title.slice(0, 20) + '...';
    }
    return title;
  };

  const handleImageError = (e) => {
    e.target.src = '/noimage.jpg'; 
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {searchResult &&
        searchResult.Search.map((item, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <img
                src={item.Poster === 'N/A' ? '/noimage.jpg' : item.Poster}
                onError={handleImageError}
                className="card-img-top"
                alt="No Poster Available"
              />
              <div className="card-body">
                <h3 className="card-title">{getTitle(item)}</h3>
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
