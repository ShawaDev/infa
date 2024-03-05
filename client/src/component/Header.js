import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Если используется React Router

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Zabey.kz
            </Link>
          </Typography>
          <nav>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/contacts" color="inherit">
              Contacts
            </Button>
            <Button component={Link} to="/sign-up" color="inherit">
              Registration
            </Button>
            <Button component={Link} to="/sign-in" color="inherit">
              Log In
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
