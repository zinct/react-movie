import React from 'react';

const ListGroup = ({ children, items, onItemSelect, textProperty, valueProperty, selectedItem }) => {
  return (
    <div className="card">
      <div className="card-header">
        {children}
      </div>
      <div className="card-body p-0">
        <ul className="list-group">
          {items.map(item => (
            <li 
              className={`list-group-item ${selectedItem === item ? 'active' : ''}`} 
              key={item[valueProperty]} 
              style={{cursor: 'pointer'}} 
              onClick={() => onItemSelect(item)}
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: 'id',
}

export default ListGroup;