import * as React from 'react';

// tslint:disable-next-line:ordered-imports
import { Switch, Route, Redirect } from 'react-router-dom';

// tslint:disable-next-line:no-submodule-imports
import 'react-ocean-forms-bootstrap/build/main.css';

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
      <Route path="/components/bootstrap/input/" component={InputPage} />
      <Route path="/components/bootstrap/select/" component={SelectPage} />
      <Route path="/components/bootstrap/check/" component={CheckPage} />
      <Route path="/components/bootstrap/date-picker/" component={DatePickerPage} />
      <Route path="/components/bootstrap/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/components/bootstrap/form-button/" component={FormButtonPage} />
      <Route path="/components/bootstrap/on-off-toggle-button/" component={OnOffToggleButtonPage} />
      <Redirect from="/components/bootstrap" to="/components/bootstrap/input" exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
