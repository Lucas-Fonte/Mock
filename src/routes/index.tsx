import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Main}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
