import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'react-ocean-forms-bootstrap/build/main.css';

import InputPage from './InputPage';
import SelectPage from './SelectPage';
import CheckPage from './CheckPage';
import DatePickerPage from './DatePickerPage';
import ValidationSummaryPage from './ValidationSummaryPage';
import FormButtonPage from './FormButtonPage';

function Bootstrap() {
  return (
    <Switch>
      <Route path="/components/bootstrap/input/" component={InputPage} />
      <Route path="/components/bootstrap/select/" component={SelectPage} />
      <Route path="/components/bootstrap/check/" component={CheckPage} />
      <Route path="/components/bootstrap/date-picker/" component={DatePickerPage} />
      <Route path="/components/bootstrap/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/components/bootstrap/form-button/" component={FormButtonPage} />
      <Route path="*" component={InputPage} />
    </Switch>
  );
}

export default Bootstrap;
