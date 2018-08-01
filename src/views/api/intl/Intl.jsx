import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import IntlFormPage from './IntlFormPage';
import NotFound from '../../not-found';

function Intl() {
  return (
    <Switch>
      <Route path="/api/intl/intl-form/" component={IntlFormPage} />
      <Redirect from="/api/intl" to="/api/intl/intl-form" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Intl;
