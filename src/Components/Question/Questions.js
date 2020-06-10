import React from 'react';
import {
    Route,
    Link,
  } from 'react-router-dom'
import questions from './QuestionJSON.json'
import {Jumbotron} from 'react-bootstrap';

function Resource ({ match }) {
    const question = questions.find(({ id }) => id === match.params.questionId)
      .resources.find(({ id }) => id === match.params.subId)
  
    return (
      <div>
        <h3>{question.name}</h3>
        <p>{question.description}</p>
        <a href={question.url}>More info.</a>
      </div>
    )
  }

const Question = ({ match }) => { 
    const question = questions.find(({ id }) => id === match.params.questionId)
  
    return (
        <div>
          <h2>{question.name}</h2>
          <p>{question.description}</p>
    
          <ul>
            {question.resources.map((sub) => (
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>
    
          <hr />
          
        <Route path={`${match.path}/:subId`} component={Resource} />
      </div>
    )
}



export default Question