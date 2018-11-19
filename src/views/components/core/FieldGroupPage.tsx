import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import reusableDemo from './examples/ReusableFieldGroup';
import simpleDemo from './examples/SimpleFieldGroup';

import ReusableFieldGroupJs from '!!raw-loader!./examples/ReusableFieldGroup.js';
import SimpleFieldGroupJs from '!!raw-loader!./examples/SimpleFieldGroup.js';

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
        code={SimpleFieldGroupJs}
      />

      <Showcase
        title="Reuse form parts"
        description="A field group is a great way to reuse recurring fields."
        component={reusableDemo}
        code={ReusableFieldGroupJs}
      />
    </ComponentPage>
  );
};
