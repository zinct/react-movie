import React from 'react';

const Input = ({ label, name, value, onChange, type, errors, options }) => {

  function getClasses() {
    if(errors[name]) return 'form-control is-invalid';
    return 'form-control';
  }

  if(type === 'select')  {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select className={getClasses()} name={name} id={name} onChange={onChange}>
          <option value="">Select {name}</option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="invalid-feedback">
          {errors && errors[name]}
        </div>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} className={getClasses()} name={name} value={value} onChange={onChange} id={name} />
      <div className="invalid-feedback">
        {errors && errors[name]}
      </div>
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  options: [],
}

export default Input;