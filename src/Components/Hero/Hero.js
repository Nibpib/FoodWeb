import React, {Fragment} from 'react';
import {Button, Col, Row, Image, InputGroup, FormControl} from 'react-bootstrap';
import '../../App.css';
import Search from '../Search/Search'
import ReactLogo from '../../Assets/shoppingSVG.svg' 


function Hero() {
  return (
    <Row className="fill-height">
        <Col className="center-vert padding-top padding-left " lg = "5" md="5" xs="12">
          <p className="roboto large">
            Ensuring every American safe access to healthy, affordable food.
          </p>
          <p className='gray mb-4'>
            <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in porttitor augue. Donec lorem eros, vehicula sed turpis sit amet, venenatis ultricies neque. Donec nisl velit, aliquet eu augue ac, blandit varius augue. Duis id elit velit. Morbi condimentum finibus ipsum, ut accumsan dolor vehicula quis. 
          </strong>
          </p>
          
          <Search></Search>

        </Col>
        <Col className="center-vert-horz " lg = "7" xs="12">
          <Image className="hide-overflow padding-top" src={ReactLogo}></Image>
        </Col>
    </Row>
  );
}

export default Hero;
