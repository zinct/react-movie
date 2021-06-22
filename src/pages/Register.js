import React from 'react';
import Form from '../components/common/Form';
import Card from '../components/common/Card';
import Joi from 'joi-browser';

const Register = () => {
  const data = {
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
  };

  const input = [
    { key: 1, name: 'name', label: 'Name', type: 'text' },
    { key: 2, name: 'username', label: 'Username', type: 'text' },
    { key: 3, name: 'password', label: 'Password', type: 'password' },
    { key: 4, name: 'password_confirmation', label: 'Password Confirmation', type: 'password' },
  ];

  const schema = {
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  };

  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <Card title="Register Form">
      <Form 
        data={data}
        input={input}
        schema={schema} 
        onSubmit={handleSubmit}
        buttonLabel="Register"
      />
    </Card>
  );
};

export default Register;