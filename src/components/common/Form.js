import React, { useState, useEffect } from 'react';
import Joi, { options } from 'joi-browser';
import Input from './Input';
import PropTypes from 'prop-types';

const Form = ({ data: dataProps, schema, onSubmit, input, buttonLabel }) => {

  const [data, setData] = useState(dataProps);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = validateInput();
    setErrors(newErrors || {});
  }, [data]);

  function handleChange({ target }) { 
    const newAccount = {...data};
    newAccount[target.name] = target.value;
    setData(newAccount);
  }

  function validateInput() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if(!error) return;

    const newErrors = {};
    for(const e of error.details)
      newErrors[e.path[0]] = e.message;
    return Object.keys(newErrors).length ? newErrors : null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateInput();
    setErrors(newErrors || {});

    if(newErrors) return;
    onSubmit(data);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      {input.map(i => (
        <Input 
          key={i.key}
          label={i.label}
          name={i.name} 
          value={data[i.name]} 
          onChange={handleChange} 
          type={i.type} 
          errors={errors}
          options={i.options}
        />
      ))}
      <button type="submit" className="btn btn-primary" >{buttonLabel || 'Submit'}</button>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  input: PropTypes.array.isRequired,
};

export default Form;