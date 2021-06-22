import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ data, columns, onSort, sort }) => {
  return (
    <table className="table table-striped mt-4">
      <TableHeader
        columns={columns}
        sort={sort}
        onSort={onSort}
      />
      <TableBody 
        data={data}
        columns={columns}
      />
    </table>
  );
};

export default Table;