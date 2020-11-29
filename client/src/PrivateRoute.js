import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import Spinner from './components/Spinner/Spinner.component';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <p>loading...</p>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


const mapStateToProps = state => ({
  auth: state.user
});

export default connect(mapStateToProps)(PrivateRoute);