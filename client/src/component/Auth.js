import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Auth() {
  return (
    <div>
        <Form className="register-form" action='http://localhost:8000/sign-in' method='post'>
            <h1>Введите данные</h1>

            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" placeholder="omarzhakman@gmail.com" name='email' required/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="********" name='password' required/>
            </Form.Group>

            <Button variant="primary" type="submit" className='btn'>
                Log in
            </Button>
        </Form>
    </div>
  )
}
