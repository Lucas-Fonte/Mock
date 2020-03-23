import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Main from '../layout/Main';
import Mail from '../layout/Mail';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Main}
    />
    <Route
      path="/mail"
      component={Mail}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
