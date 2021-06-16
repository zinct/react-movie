import React, { useState } from 'react';
import Like from './common/Like';
import _ from 'lodash';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';

const MoviesTable = ({ movies, onLike, onDelete, sort: sortColumn }) => {
  const [sort, setSort] = useState(sortColumn);
  const sortedMovies = _.orderBy(movies, [sort.direction], [sort.order]);
  const columns = [
    { direction: '_id', label: 'No' },
    { direction: 'title', label: 'Title' },
    { direction: 'genre.name', label: 'Genre' },
    { direction: 'stock', label: 'Stock' },
    { direction: 'rate', label: 'Rate' },
    { key: 'like', label: 'Like', 
      content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} /> },
    { key: 'actions', label: 'Actions', 
      content: movie => <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button> },
  ];

  function handleSort(direction) {
    if(direction === sort.direction)
      setSort({ direction, order: sort.order === 'asc' ? 'desc' : 'asc' });
    else    
      setSort({ direction, order: 'asc' });
  }

  return (
    <table className="table table-striped mt-4">
      <TableHeader
        columns={columns}
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
  sort: { direction: '_id', order: 'asc' },
}

export default MoviesTable;