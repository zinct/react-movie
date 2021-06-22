import React from 'react';

const SearchBox = ({ name, value, onChange }) => {

  function handleChange({ target }) {
    onChange(target.value);
  }

  return (
    <div className="form-group">
      <input type="text" className="form-control" name={name} value={value} onChange={handleChange} id={name} placeholder="Search..." />
    </div>
  );
};

SearchBox.defaultProps = {
  type: 'text',
  options: [],
}

export default SearchBox;