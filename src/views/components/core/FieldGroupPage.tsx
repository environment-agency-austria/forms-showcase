import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import reusableDemo from './examples/ReusableFieldGroup';
// tslint:disable-next-line:import-name
import simpleDemo from './examples/SimpleFieldGroup';

const simple = require('!!raw-loader!./examples/SimpleFieldGroup.js'); // eslint-disable-line
const reusable = require('!!raw-loader!./examples/ReusableFieldGroup.js'); // eslint-disable-line

export const FieldGroupPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="FieldGroup"
      description="Defines a collection of fields. It will combine its values to
      a sub-object and provides the possibility to attach validators to the group."
      parent="core"
    >
      <Showcase
        title="Simple field group"
        description="Showcase of a simple field group"
        component={simpleDemo}
        code={simple}
      />

      <Showcase
        title="Reuse form parts"
        description="A field group is a great way to reuse recurring fields."
        component={reusableDemo}
        code={reusable}
      />
    </ComponentPage>
  );
};
