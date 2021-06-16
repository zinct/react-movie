import React from 'react';

const ListGroup = ({ children, items, onItemSelect, textProperty, valueProperty, selectedItem }) => {
  return (
    <div className="card">
      <div className="card-header">
        {children}
      </div>
      <div className="card-body p-0">
        <ul className="list-group">
          {items.map(genre => (
            <li className={`list-group-item ${selectedItem === genre ? 'active' : ''}`} key={genre[valueProperty]} style={{cursor: 'pointer'}} onClick={() => onItemSelect(genre)}>{genre[textProperty]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup;