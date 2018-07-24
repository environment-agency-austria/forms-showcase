import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormPage from './FormPage';
import FieldPage from './FieldPage';
import FieldGroupPage from './FieldGroupPage';
import ValidationSummaryPage from './ValidationSummaryPage';

function Core() {
  return (
    <Switch>
      <Route path="/components/core/form/" component={FormPage} />
      <Route path="/components/core/field/" component={FieldPage} />
      <Route path="/components/core/field-group/" component={FieldGroupPage} />
      <Route path="/components/core/validation-summary/" component={ValidationSummaryPage} />
      <Route path="*" component={FormPage} />
    </Switch>
  );
}

export default Core;
