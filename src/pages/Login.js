import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import Card from '../components/common/Card';

const Login = () => {
  const data = {
    username: '',
    password: '',
  };

  const schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  const input = [
    { key: 1, name: 'username', label: 'Username', type: 'text' },
    { key: 2, name: 'password', label: 'Password', type: 'password' },
  ];

  function handleSubmit(data) {
    console.log('submited - ', data)
  }

  return (
    <Card title="Login Form">
      <Form 
        data={data}
        onSubmit={handleSubmit}
        schema={schema}
        input={input}
      />
    </Card>
  );
};

export default Login;