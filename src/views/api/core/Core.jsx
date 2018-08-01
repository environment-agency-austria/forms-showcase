import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormPage from './FormPage';
import FieldPage from './FieldPage';
import FieldGroupPage from './FieldGroupPage';
import ValidationSummaryPage from './ValidationSummaryPage';
import InputPage from './InputPage';
import FormButtonPage from './FormButtonPage';
import ValidatorsPage from './ValidatorsPage';
import NotFound from '../../not-found';

function Core() {
  return (
    <Switch>
      <Route path="/api/core/form/" component={FormPage} />
      <Route path="/api/core/field/" component={FieldPage} />
      <Route path="/api/core/field-group/" component={FieldGroupPage} />
      <Route path="/api/core/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/api/core/input/" component={InputPage} />
      <Route path="/api/core/form-button/" component={FormButtonPage} />
      <Route path="/api/core/validators/" component={ValidatorsPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Core;
