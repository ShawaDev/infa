import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Registration = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validatePasswordMatch(event.target.value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!regex.test(password)) {
      setPasswordError('Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, а также цифры.');
    } else {
      setPasswordError('');
    }
  };

  const validatePasswordMatch = (confirmPassword) => {
    if (password !== confirmPassword) {
      setPasswordMatchError('Пароли не совпадают.');
    } else {
      setPasswordMatchError('');
    }
  };

  return (
    <Container maxWidth="sm" style={formContainerStyle}>
      <Typography variant="h4" gutterBottom>
        Введите данные
      </Typography>
      <form action="http://localhost:8000/sign-up" method="post" style={formStyle}>
        <TextField
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
          required
          variant="outlined"
          style={inputStyle}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="example@email.com"
          name="email"
          required
          variant="outlined"
          style={inputStyle}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          required
          error={!!passwordError}
          helperText={passwordError}
          variant="outlined"
          style={inputStyle}
          onChange={handlePasswordChange}
        />
        <TextField
          label="Confirm password"
          type="password"
          placeholder="********"
          name="confirmpass"
          required
          error={!!passwordMatchError}
          helperText={passwordMatchError}
          variant="outlined"
          style={inputStyle}
          onChange={handleConfirmPasswordChange}
        />
        <TextField
          label="Phone number"
          type="tel"
          placeholder="+1 234 567 8901"
          name="phone"
          required
          variant="outlined"
          style={inputStyle}
        />
        <Button variant="contained" type="submit" style={buttonStyle}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Registration;
