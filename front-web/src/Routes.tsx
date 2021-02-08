import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Orders from './components/Orders';
import Home from './components/Home';
import Navbar from './components/Navbar';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
