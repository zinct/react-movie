import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';

import Card from '../components/common/Card'; 
import Form from '../components/common/Form';
import { addMovie, getMovie } from '../services/fakeMoviesService';
import { getGenres } from '../services/fakeGenresService';

const AddMovies = ({ history, match }) => {
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState({});
  
  const data = {
    title: movie.title,
    genre: movie.genre,
    stock: movie.stock,
    rate: movie.rate,
  }

  const schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    stock: Joi.number().required(),
    rate: Joi.number().required(),
  }

  const optionsData = genres.map(genre => {
    return { label: genre.name, value: genre.id };
  });


  const input = [
    { key: 1, name: 'title', label: 'Title', type: 'text' },
    { key: 2, name: 'genre', label: 'Genre', type: 'select', options: optionsData  },
    { key: 3, name: 'stock', label: 'Stock', type: 'number' },
    { key: 4, name: 'rate', label: 'Rate', type: 'text' },
  ];

  useEffect(() => {
    // Check if ID valid
    const id = match.params.id
    const result = getMovie(id)
    if(!result) return history.push('/not-found');
    setMovie(result);
    setGenres(getGenres());
  },[]);

  function handleSubmit(data) {
    const result = addMovie(data);
    history.replace('/movies')
  }

  return (
    <Card title="Add Movie">
      <Form 
        data={data}
        input={input}
        schema={schema}
        onSubmit={handleSubmit}
      />
    </Card>
  );
};

export default AddMovies;