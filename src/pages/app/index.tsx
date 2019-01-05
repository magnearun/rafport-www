import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import Layout from 'components/app-layout/AppLayout';
import Login from 'components/login/Login';
import PrivateRoute from 'components/private-route/PrivateRoute';

import Dashboard from './dashboard';
import Details from './details';

const App = () => (
  <Fragment>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/profile" component={Details} />
      <Login path="/app/login" />
    </Router>
  </Fragment>
)

export default App