import React, { useEffect, useState } from 'react';
import _, { filter } from 'lodash';
import ListGroup from './components/common/ListGroup';
import Pagination from './components/common/Pagination';
import MoviesTable from './components/MoviesTable';
import { getGenres } from './services/fakeGenresService';
import { getMovies } from './services/fakeMoviesService';
import { paginate } from './utils/paginate';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([{_id: '', name: 'All Genre'}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [pageSize] = useState(5);

  useEffect(() => {
    setMovies(getMovies());
    setGenres([...genres, ...getGenres()]);
  }, []);
  
  const handleDelete = (movie) => {
    setMovies(movies.filter(m => m !== movie));
  }

  const handleLike = (movie) => {
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