import React from 'react';
import HomePage from 'pages/HomePage/HomePage.component';
import './App.css'
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </Switch>
  </div>
)

export default App