import React from 'react';
import './Registration.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Registration() {

  return (
    <Form className="register-form" action='http://localhost:8000/sign-up' method='post'>
      <h1>Введите данные</h1>

      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="John Doe" name='name' required/>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" name='email' required/>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="********" name='password' required/>
      </Form.Group>

      <Form.Group controlId="confirmpass">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control type="password" placeholder="********" name='confirmpass' required/>
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control type="tel" placeholder="+1 234 567 8901" name='phone' required/>
      </Form.Group>

      <a href='http://localhost:3000/sign-in'>Create account</a>

      <Button variant="primary" type="submit" className='btn'>
        Register
      </Button>
    </Form>

  )
}
