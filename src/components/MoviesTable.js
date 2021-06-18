import React, { useState } from 'react';
import _ from 'lodash';

import Like from './common/Like';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, sort: sortColumn } = props;

  const [sort, setSort] = useState(sortColumn);
  const sortedMovies = _.orderBy(movies, [sort.path], [sort.order]);
  const columns = [
    { path: '_id', label: 'No' },
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'stock', label: 'Stock' },
    { path: 'rate', label: 'Rate' },
    { key: 'like', label: 'Like', 
      content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} /> },
    { key: 'actions', label: 'Actions', 
      content: movie => <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button> },
  ];
  
  function handleSort(path) {
    if(path === sort.path)
      setSort({ path, order: sort.order === 'asc' ? 'desc' : 'asc' });
    else    
      setSort({ path, order: 'asc' });
  }

  return (
    <table className="table table-striped mt-4">
      <TableHeader
        columns={columns}
        sort={sort}
        onSort={handleSort}
      />
      <TableBody 
        data={sortedMovies}
        columns={columns}
        onLike={onLike}
      />
    </table>
  );
};

MoviesTable.defaultProps = {
  sort: { path: '_id', order: 'asc' },
}

export default MoviesTable;