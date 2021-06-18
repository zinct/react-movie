import React, { useEffect, useState } from 'react';
import _, { filter } from 'lodash';

import MoviesTable from './components/MoviesTable';
import ListGroup from './components/common/ListGroup';
import Pagination from './components/common/Pagination';
import SelectMenu from './components/common/SelectMenu';

import { paginate } from './utils/paginate';

import { getGenres } from './services/fakeGenresService';
import { getMovies } from './services/fakeMoviesService';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [pageSize, setPageSize] = useState(5);

  const pageSizeItems = [
    { label: '5', value: 5, key: 1 },
    { label: '10', value: 10, key: 2 },
    { label: '20', value: 20, key: 3 },
    { label: '30', value: 30, key: 4 },
    { label: '40', value: 40, key: 5 },
    { label: '50', value: 50, key: 6 },
  ];

  useEffect(() => {
    setMovies(getMovies());
    setGenres([{_id: '', name: 'All Genre'}, ...getGenres()]);
  }, []);
  
  function handleDelete(movie) {
    setMovies(movies.filter(m => m !== movie));
  }

  function handleLike(movie) {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setCurrentPage(1);
  }
  
  function getTitle() {
    return filteredMovies.length ? <h2>Showing {filteredMovies.length} movies in the database.</h2> : <h2>The is no movies in the database.</h2>
  }

  function handlePageSize(e) {
    const value = e.target.value;
    setPageSize(value)
  }
  
  const filteredMovies = selectedGenre && selectedGenre._id ? movies.filter(movie => movie.genre._id === selectedGenre._id) : movies;
  const paginateMovies = paginate(filteredMovies, currentPage, pageSize);
  
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
          {getTitle()}
          <SelectMenu items={pageSizeItems} onChange={handlePageSize} />
          {paginateMovies.length > 0 && 
            <MoviesTable 
              movies={paginateMovies} 
              onLike={handleLike}
              onDelete={handleDelete}
            />
          }
          <Pagination 
            itemsCount={filteredMovies.length} 
            pageSize={pageSize} 
            onPageChange={handlePageChange} 
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default App;