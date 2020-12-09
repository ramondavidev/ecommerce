import React, { useEffect, lazy, Suspense, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Spinner from './components/spinner/spinner.component';

import {store} from './redux/store';
import { loadUser } from './redux/user/user-actions';
import setAuthToken from './utils/setAuthToken';

import './App.css';

//pages
const Home = lazy(() => import('./pages/home/home.component'));
const Login = lazy(() => import('./pages/login/login.component'));
const Register = lazy(() => import('./pages/register/register.component'));
const Men = lazy(() => import('./pages/men/men.component'));
const Women = lazy(() => import('./pages/women/women.component'));
const Children = lazy(() => import('./pages/children/children.component'));
const CartPage = lazy(() => import('./pages/cart/cart.component'));
const Favorites = lazy(() => import('./pages/favorites/favorites.component'));
const ShowItem = lazy(() => import('./pages/show-item/show-item.component'));
const Search = lazy(() => import('./pages/search/search.component'));
const Purchases = lazy(() => import ('./pages/purchases/purchases.component'));

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Switch>
        <Suspense fallback={ <Spinner />}>
          <Route exact path='/registrar' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/roupas-masculinas' component={Men} />
          <PrivateRoute exact path='/roupas-femininas' component={Women} />
          <PrivateRoute exact path='/roupas-infantis' component={Children} />
          <PrivateRoute exact path='/carrinho' component={CartPage} />
          <PrivateRoute exact path='/favoritos' component={Favorites} />
          <PrivateRoute path='/produto/:id' component={ShowItem} />
          <PrivateRoute path='/pesquisa/:valor' component={Search} />
          <PrivateRoute path='/compras' component={Purchases} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;