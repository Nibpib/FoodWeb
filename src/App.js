import React, {Fragment} from 'react';
import Menu from './Components/Menu/Menu';
import Landing from './Components/Landing/Landing';
import  Question from "./Components/Question/Question";
import Map from './Components/MapBox/Map'
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  return (
      <Fragment>
        <Menu></Menu>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/questions" component={Question} />
          <Route path="/maps" component={Map}/>
        </Switch>
          
      </Fragment>
  );
}

export default App;
