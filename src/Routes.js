import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterClients from './pages/RegisterClients';
import RegisterPage from './pages/RegisterPage';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/clientesCadastrados" component={RegisterClients} />
        <Route exact path="/cadastro" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default Routes;
