import React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleSelectDemo from './examples/SimpleSelect';
import plaintextSelectDemo from './examples/PlaintextSelect';

import SimpleSelectJs from '!!raw-loader!./examples/SimpleSelect.js';
import PlaintextSelectJs from '!!raw-loader!./examples/PlaintextSelect.js';

export const SelectPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="Select"
      description="Defines a bootstrap form line containing a label and an input. Additionally it can
      render an info button and info alert as well as validation messages. If the user adds the required
      validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="react-select"
        description="Showcase of the react-select integration"
        component={simpleSelectDemo}
        code={SimpleSelectJs}
      />

      <Showcase
        title="react-select plaintext mode"
        description="Support for plaintext mode is provided out of the box."
        component={plaintextSelectDemo}
        code={PlaintextSelectJs}
      />
    </ComponentPage>
  );
};
