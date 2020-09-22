import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/registrar' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;
