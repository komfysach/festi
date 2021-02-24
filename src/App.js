import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/main/main.component';
import './pages/main/main.styles.scss';

const HatsPage = () => (
  <div>

    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
