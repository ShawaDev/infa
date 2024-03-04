import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacts = () => {
  return (
    <Container>
        
          <h2>Контактная информация</h2>
          <ul>
            <li><strong>Адрес:</strong> Сатпаева 71</li>
            <li><strong>Телефон:</strong> +7 777 777 77 77</li>
            <li><strong>Email:</strong> zabey.kz@gmail.com</li>
            <li><strong>Сайт:</strong> zabey.kz</li>
            <li><strong>Социальные сети:</strong> Instagram: @zabey.kz</li>
          </ul>
    </Container>
  );
};

export default Contacts;
