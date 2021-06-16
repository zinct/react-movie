import React from 'react';

const Like = ({ onClick, liked }) => {

  function getClasses() {
    return liked ? 'fa fa-heart' : 'fa fa-heart-o';
  }

  return (
    <React.Fragment>
      <i style={{cursor: 'pointer'}} className={getClasses()} onClick={onClick} aria-hidden="true"></i>
    </React.Fragment>
  );
};

export default Like;