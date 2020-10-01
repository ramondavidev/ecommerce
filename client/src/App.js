import React, { useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

//pages
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import Men from './pages/men/men.component';
import Women from './pages/women/women.component';
import Children from './pages/children/children.component';
import CartPage from './pages/cart/cart.component';

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
        <Route exact path='/registrar' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/roupas-masculinas' component={Men} />
        <PrivateRoute exact path='/roupas-femininas' component={Women} />
        <PrivateRoute exact path='/roupas-infantis' component={Children} />
        <PrivateRoute exact path='/carrinho' component={CartPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
