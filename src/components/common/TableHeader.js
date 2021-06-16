import React from 'react';

const TableHeader = ({ columns, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th 
            onClick={() => onSort(column.direction)}
            style={{cursor: 'pointer'}}
            key={column.direction || column.key}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;