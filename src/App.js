import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage.component';
import ShopPage from 'pages/ShopPage/ShopPage.component';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  </div>
)

export default App