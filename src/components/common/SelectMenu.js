import React from 'react';

const SelectMenu = (props) => {
  const { items, onChange } = props;
  return (
    <select className="form-control" onChange={onChange}>
      {items.map(item => (
        <option value={item.value} key={item.key}>{item.label}</option>
      ))}
    </select>
  );
};

export default SelectMenu;