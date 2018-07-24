import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InputPage from './InputPage';
import SelectPage from './SelectPage';

function Bootstrap() {
  return (
    <Switch>
      <Route path="/components/bootstrap/input/" component={InputPage} />
      <Route path="/components/bootstrap/select/" component={SelectPage} />
      <Route path="*" component={InputPage} />
    </Switch>
  );
}

export default Bootstrap;
