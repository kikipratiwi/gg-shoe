import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const OxfordsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>OXFORDS PAGE </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/oxfords' component={OxfordsPage} />
      </Switch>
    </div>
  );
}

export default App;
