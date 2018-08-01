import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import InputPage from './InputPage';
import SelectPage from './SelectPage';
import CheckPage from './CheckPage';
import DatePickerPage from './DatePickerPage';
import ValidationSummaryPage from './ValidationSummaryPage';
import FormButtonPage from './FormButtonPage';
import OnOffToggleButtonPage from './OnOffToggleButtonPage';
import NotFound from '../../not-found';

function Bootstrap() {
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
}

export default Bootstrap;
