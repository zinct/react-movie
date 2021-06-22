import React from 'react';

const TableHeader = (props) => {

  const { columns, onSort, sort } = props;

  function renderSortIcon(column) {
    if(column.path !== sort.path) return null;
    if(sort.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th 
            onClick={() => column.disable || onSort(column.path)}
            style={{cursor: 'pointer'}}
            key={column.path || column.key}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;