import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({});

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API}`
      );
      const result = await response.json();
      setDetails(result);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-lg-6 mt-5">
          <div class="text-center">
            <img src={details.Poster} />
            <h1>{details.Title}</h1>
          </div>
          <table class="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Plot</th>
                <td>{details.Plot}</td>
              </tr>
              <tr>
                <th scope="row">Released</th>
                <td>{details.Released}</td>
              </tr>
              <tr>
                <th scope="row">Director</th>
                <td>{details.Director}</td>
              </tr>
              <tr>
                <th scope="row">Writer</th>
                <td>{details.Writer}</td>
              </tr>
              <tr>
                <th scope="row">Actors</th>
                <td>{details.Actors}</td>
              </tr>
              <tr>
                <th scope="row">Awards</th>
                <td>{details.Awards}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
