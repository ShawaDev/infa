import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const formContainerStyle = {
    marginTop: '50px',
    textAlign: 'center',
  };

  const formStyle = {
    margin: '0 auto',
    maxWidth: '400px',
  };

  const inputStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '20px',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/sign-in', {
        email,
        password,
      });
      alert("Session created, redirecting")
      navigate("/")

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error); // Установка ошибки в случае неудачного входа
      } else {
        setError('Произошла ошибка при выполнении запроса.');
      }
    }
  };

  

  return (
    <Container maxWidth="sm" style={formContainerStyle}>
      <Typography variant="h4" gutterBottom>
        Введите данные
      </Typography>
      <form onSubmit={handleSubmit} style={formStyle}>
        <TextField
          label="Email"
          type="text"
          placeholder="omarzhakman@gmail.com"
          name="email"
          required
          variant="outlined"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          required
          variant="outlined"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography variant="body1" style={{ color: 'red' }}>{error}</Typography>}
        <Button variant="contained" type="submit" style={buttonStyle}>
          Log in
        </Button>
      </form>
      <Typography variant="body1" gutterBottom style={{ marginTop: '20px' }}>
        <a href="http://localhost:3000/sign-up">Create account</a>
      </Typography>
    </Container>
  );
};

export default Auth;
