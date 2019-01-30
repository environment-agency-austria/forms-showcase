import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { NotFound } from '../../not-found';
import { FieldGroupPage } from './FieldGroupPage';
import { FieldPage } from './FieldPage';
import { FormButtonPage } from './FormButtonPage';
import { FormPage } from './FormPage';
import { FormTextPage } from './FormTextPage';
import { InputPage } from './InputPage';
import { ValidationSummaryPage } from './ValidationSummaryPage';

export const Core = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/components/core/form/" component={FormPage} />
      <Route path="/components/core/field/" component={FieldPage} />
      <Route path="/components/core/field-group/" component={FieldGroupPage} />
      <Route path="/components/core/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/components/core/input/" component={InputPage} />
      <Route path="/components/core/form-button/" component={FormButtonPage} />
      <Route path="/components/core/form-text/" component={FormTextPage} />
      <Redirect from="/components/core" to="/components/core/form" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
