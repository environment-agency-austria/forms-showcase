import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormPage from './FormPage';
import FieldPage from './FieldPage';
import FieldGroupPage from './FieldGroupPage';
import ValidationSummaryPage from './ValidationSummaryPage';
import InputPage from './InputPage';
import FormButtonPage from './FormButtonPage';
import NotFound from '../../not-found';

function Core() {
  return (
    <Switch>
      <Route path="/components/core/form/" component={FormPage} />
      <Route path="/components/core/field/" component={FieldPage} />
      <Route path="/components/core/field-group/" component={FieldGroupPage} />
      <Route path="/components/core/validation-summary/" component={ValidationSummaryPage} />
      <Route path="/components/core/input/" component={InputPage} />
      <Route path="/components/core/form-button/" component={FormButtonPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Core;
