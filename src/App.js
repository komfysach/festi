import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/main/main.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
