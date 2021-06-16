import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {
  function renderCell(data, column) {
    if(column.content) return column.content(data);
    return _.get(data, column.direction)
  }

  return (
    <tbody>
      {data.map(data => {
        return (
          <tr key={data._id}>
            {columns.map(column => 
              <td 
                key={column.direction || column.key}
              >
                {renderCell(data, column)}
              </td>
            )}
          </tr>
      )})}
    </tbody>
  );
};

export default TableBody;