import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';

import Card from '../components/common/Card'; 
import Form from '../components/common/Form';
import { addMovie, getMovie } from '../services/fakeMoviesService';
import { getGenres } from '../services/fakeGenresService';
import axios from 'axios';
import { apiEndPoint } from '../config/database';

const AddMovies = ({ history, match }) => {
  const [genres, setGenres] = useState([]);
  const data = {
    title: '',
    genre: '',
    stock: '',
    rate: '',
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

  useEffect(async () => {
    const { data: genres } = await axios.get(`${apiEndPoint}/genres`);

    setGenres(genres);
  },[]);

  async function handleSubmit(data) {
    console.log(data)
    try {
      const res = await axios.post(`${apiEndPoint}/movies`, data);
      console.log(res)
      history.replace('/movies')
    } catch(err) {
      console.log(err)
    }
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