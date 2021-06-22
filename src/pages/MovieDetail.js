import React from 'react';

const MovieDetail = ({ match }) => {
  return (
    <div>
      <h2>Movie Detail with id {match.params.id}</h2>
    </div>
  );
};

export default MovieDetail;