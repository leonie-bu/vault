import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Password from './pages/Password/Password';
import AddService from './pages/AddService/AddService';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/password/:service">
          <Password />
        </Route>
        <Route path="/add">
          <AddService />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
