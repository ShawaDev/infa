import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {

  return (
    <footer className="Footer">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              &copy; 2024 - Все права защищены
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Link href="#" color="inherit">
                  <i class="fab fa-linkedin-in"></i> 
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <i class="fab fa-twitter"></i>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <i class="fab fa-instagram"></i>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
