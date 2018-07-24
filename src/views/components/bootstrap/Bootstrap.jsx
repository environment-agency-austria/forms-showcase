import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InputPage from './InputPage';

function Bootstrap() {
  return (
    <Switch>
      <Route path="/components/core/input/" component={InputPage} />
      <Route path="*" component={InputPage} />
    </Switch>
  );
}

export default Bootstrap;
