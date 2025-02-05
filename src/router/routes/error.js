// routes/error.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../views/NotFound';
import ServerError from '../views/ServerError';

const ErrorRoutes = () => {
  return (
    <Switch>
      {/* Route for 404 - Page Not Found */}
      <Route exact path="/404" component={NotFound} />
      
      {/* Route for 500 - Server Error */}
      <Route exact path="/500" component={ServerError} />
      
      {/* Fallback Route for any other errors */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default ErrorRoutes;
