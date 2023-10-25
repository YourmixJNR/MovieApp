import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API}`);
      const result = await response.json();
      setDetails(result);
    } catch(error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <div>
      <img
        src={details.Poster}
        alt=""
      />
    </div>
  )
}

export default DetailPage;
