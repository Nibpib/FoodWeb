import React, {Fragment} from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import '../../App.css';
import Map from '../../Assets/map.svg' 

function About() {
    return (
        <Row className="space-top fill-height">
            <Col className="center-vert" lg = "7" xs="12">
                <Image className="hide-overflow2 padding-left padding-top" src={Map}></Image>
            </Col>
        
            <Col className="center-vert padding-top padding-right " lg = "5" md="5" xs="12">
                <p className="roboto large">
                    Ensuring every American safe access to healthy, affordable food.
                </p>
                <p className='gray mb-4'>
                    <strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in porttitor augue. Donec lorem eros, vehicula sed turpis sit amet, venenatis ultricies neque. Donec nisl velit, aliquet eu augue ac, blandit varius augue. Duis id elit velit. Morbi condimentum finibus ipsum, ut accumsan dolor vehicula quis. 
                    </strong>
                </p>
            </Col>
        </Row>
    );
  }
  
  export default About;