import React, { useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

//pages
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';

import store from './redux/store';
import { loadUser } from './redux/user/user-actions';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/registrar' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;
