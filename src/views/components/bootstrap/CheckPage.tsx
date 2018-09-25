import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import simpleCheckDemo from './examples/SimpleCheck';

const simpleCheck = require('!!raw-loader!./examples/SimpleCheck.js'); // eslint-disable-line

export const CheckPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="Select"
      description="Defines a bootstrap form line containing a checkbox with the label as the checkbox
      text. Additionally it can render an info button and info alert as well as validation messages.
      If the user adds the required validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="Check"
        description="Showcase of a simple checkbox"
        component={simpleCheckDemo}
        code={simpleCheck}
      />
    </ComponentPage>
  );
};
