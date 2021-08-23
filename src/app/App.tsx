import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Password from './pages/Password/Password';
import Add from './pages/Add/Add';
import Search from './pages/Search/Search';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/password/:service">
          <Password />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
