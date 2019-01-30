import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { NotFound } from '../../not-found';
import { IntlFormPage } from './IntlFormPage';

export const Intl = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/api/intl/intl-form/" component={IntlFormPage} />
      <Redirect from="/api/intl" to="/api/intl/intl-form" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
