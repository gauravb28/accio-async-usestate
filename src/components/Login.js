import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Button from '@mui/material/Button';

const Login = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="contained">Hello world</Button>
      <h1>Password</h1>
      <label htmlFor="password">Password: </label>
      <input
        type={show ? 'text' : 'password'}
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {show ? (
        <FaEyeSlash onClick={() => setShow(false)} />
      ) : (
        <FaEye onClick={() => setShow(true)} />
      )}
    </div>
  );
};

export default Login;
