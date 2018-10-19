import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleDemo from './examples/SimpleFieldGroup';
import reusableDemo from './examples/ReusableFieldGroup';

const simple = require('!!raw-loader!./examples/SimpleFieldGroup.js'); // eslint-disable-line
const reusable = require('!!raw-loader!./examples/ReusableFieldGroup.js'); // eslint-disable-line

function FieldGroupPage() {
  return (
    <ComponentPage
      title="FieldGroup"
      description="Defines a collection of fields. It will combine its values to a sub-object and provides the possibility to attach validators to the group."
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
}

export default FieldGroupPage;
