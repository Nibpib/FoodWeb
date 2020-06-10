import React, {Fragment} from 'react';
import {Button, Container} from 'react-bootstrap';
import Hero from '../Hero/Hero';
import About from '../About/About';

function Landing() {
  return (
    <Container fluid>
        <Hero></Hero>
        <About></About>
    </Container>
    
  );
}

export default Landing;
