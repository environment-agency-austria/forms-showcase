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
import { ValidatorsPage } from './ValidatorsPage';

export const Core = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/api/core/form/" component={FormPage} />
      <Route path="/api/core/field/" component={FieldPage} />
      <Route path="/api/core/field-group/" component={FieldGroupPage} />
      <Route path="/api/core/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/api/core/input/" component={InputPage} />
      <Route path="/api/core/form-button/" component={FormButtonPage} />
      <Route path="/api/core/form-text/" component={FormTextPage} />
      <Route path="/api/core/validators/" component={ValidatorsPage} />
      <Redirect from="/api/core" to="/api/core/form" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
