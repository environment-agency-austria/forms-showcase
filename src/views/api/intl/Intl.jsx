import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntlFormPage from './IntlFormPage';
import NotFound from '../../not-found';

function Intl() {
  return (
    <Switch>
      <Route path="/api/intl/intl-form/" component={IntlFormPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Intl;
