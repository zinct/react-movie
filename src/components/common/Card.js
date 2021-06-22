import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="card mt-4">
      <div className="card-header">{title}</div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;