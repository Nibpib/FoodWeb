import React from 'react';
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import questions from './QuestionJSON.json'
import Questions from './Questions'

const Question = () => {
    
    return (
        <Container>
        <Route path={`/questions/:questionId`} component={Questions}/>  
        <Row>
            <h1>Questions</h1>
        </Row>
        <Row>
        <ul>
                {questions.map(({ name, id }) => (
                <li key={id}>
                    <Link to={`/questions/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>
            <hr></hr>
        </Row>
            
            
        </Container>
    );
}

export default Question;