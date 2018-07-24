import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntlFormPage from './IntlFormPage';

function Intl() {
  return (
    <Switch>
      <Route path="/api/intl/intl-form/" component={IntlFormPage} />
      <Route path="*" component={IntlFormPage} />
    </Switch>
  );
}

export default Intl;
