import React, { useState } from 'react';
import _ from 'lodash';

import Like from './common/Like';
import Pagination from './common/Pagination';
import SelectMenu from './common/SelectMenu';

import { paginate } from '../utils/paginate'
import Table from './common/Table';
import { Link } from 'react-router-dom';

const MoviesTable = ({ movies, onLike, onDelete, onPageChange }) => {

  const [sort, setSort] = useState({ path: 'id', order: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { path: 'id', label: 'No' },
    { path: 'title', label: 'Title',
      content: movie => <Link to={`/movies/${movie.id}`}>{movie.title}</Link> },
    { path: 'genre.name', label: 'Genre' },
    { path: 'stock', label: 'Stock' },
    { path: 'rate', label: 'Rate' },
    { key: 'like', label: 'Like', 
      content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} />, disable: true },
    { key: 'actions', label: 'Actions', 
      content: movie => <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>, disable:true },
  ];

  const pageSizeItems = [
    { label: '5', value: 5, key: 1 },
    { label: '10', value: 10, key: 2 },
    { label: '20', value: 20, key: 3 },
    { label: '30', value: 30, key: 4 },
    { label: '40', value: 40, key: 5 },
    { label: '50', value: 50, key: 6 },
  ];
  
  function handleSort(path) {
    if(path === sort.path) {
      setSort({ path, order: sort.order === 'asc' ? 'desc' : 'asc' });
    } else {
      setSort({ path, order: 'asc' });
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handlePageSize(e) {
    const value = e.target.value;
    setPageSize(value)
  }

  const sortedMovies = _.orderBy(movies, [sort.path], [sort.order]);
  const paginateMovies = paginate(sortedMovies, currentPage, pageSize);

  return (
    <React.Fragment>
      <SelectMenu items={pageSizeItems} onChange={handlePageSize} />
      <Table 
        data={paginateMovies}
        columns={columns}
        sort={sort}
        onSort={handleSort}
      />
      <Pagination 
        itemsCount={movies.length} 
        pageSize={pageSize} 
        onPageChange={handlePageChange} 
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};


export default MoviesTable;