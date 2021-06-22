import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _, { filter } from 'lodash';

import MoviesTable from '../components/MoviesTable';
import ListGroup from '../components/common/ListGroup';

import { Link } from 'react-router-dom';
import { apiEndPoint } from '../config/database';
import SearchBox from '../components/common/SearchBox';

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [query, setQuery] = useState('');

  useEffect(async () => {
    const { data: movies } = await axios.get(`${apiEndPoint}/movies`);
    const { data: genres } = await axios.get(`${apiEndPoint}/genres`);

    setMovies(movies);
    setGenres([{id: '', name: 'All Genre'}, ...genres]);
  }, []);
  
  async function handleDelete(movie) {
    setMovies(movies.filter(m => m !== movie));
  }

  function handleLike(movie) {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  }

  function handleQueryChange(query) {
    setQuery(query)
  }

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
  }
  
  function getTitle() {
    return totalCount ? <h5>Showing {totalCount} movies in the database.</h5> : <h5>The is no movies in the database.</h5>
  }

  function getMoviesData() {
    const filteredMovies = selectedGenre && selectedGenre.id ? movies.filter(movie => movie.genre.id === selectedGenre.id) : movies;
    const searchedMovies = filteredMovies.filter(movie => movie.title.toLowerCase().startsWith(query));
    return {
      data: searchedMovies,
      totalCount: searchedMovies.length,
    }
  }
  
  const { data, totalCount } = getMoviesData(); 
  
  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-3">
          <ListGroup 
            items={genres}
            onItemSelect={handleGenreSelect}
            selectedItem={selectedGenre}
          >
            Genres
          </ListGroup>
        </div>
        <div className="col">
          <div className="row mb-3">
            <div className="col">{getTitle()}</div>
            <div className="col">
              <Link className="btn btn-primary btn-sm" to='/movies/create'>Add Movie</Link>
            </div>
            <div className="col">
              <SearchBox 
                name="query"
                value={query}
                onChange={handleQueryChange}
              />
            </div>
          </div>
          {movies.length > 0 && 
            <MoviesTable 
              movies={data} 
              onLike={handleLike}
              onDelete={handleDelete}
            />  
          }
        </div>
      </div>
    </main>
  );
};

export default Movies;