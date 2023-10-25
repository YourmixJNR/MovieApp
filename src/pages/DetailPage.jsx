import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailPage = () => {

  const { imdbID } = useParams();

  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API}`);
      const result = await response.json();
      console.log(result);
    } catch(error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default DetailPage;
