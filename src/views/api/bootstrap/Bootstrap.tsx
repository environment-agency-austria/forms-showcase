import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { NotFound } from '../../not-found';
import { CheckPage } from './CheckPage';
import { DatePickerPage } from './DatePickerPage';
import { FormButtonPage } from './FormButtonPage';
import { InputPage } from './InputPage';
import { OnOffToggleButtonPage } from './OnOffToggleButtonPage';
import { SelectPage } from './SelectPage';
import { ValidationSummaryPage } from './ValidationSummaryPage';

export const Bootstrap = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/api/bootstrap/input/" component={InputPage} />
      <Route path="/api/bootstrap/select/" component={SelectPage} />
      <Route path="/api/bootstrap/check/" component={CheckPage} />
      <Route path="/api/bootstrap/date-picker/" component={DatePickerPage} />
      <Route path="/api/bootstrap/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/api/bootstrap/form-button/" component={FormButtonPage} />
      <Route path="/api/bootstrap/on-off-toggle-button/" component={OnOffToggleButtonPage} />
      <Redirect from="/api/bootstrap" to="/api/bootstrap/input" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
