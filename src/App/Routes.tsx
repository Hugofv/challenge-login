import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import NotFound from '../Containers/NotFound';
import history from '../services/history';

const PrivateRoute = ({ ...props }) =>
  localStorage.getItem('acesso') ? <Route {...props} /> : <Redirect to='/' />;

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Login} />

        <PrivateRoute path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
