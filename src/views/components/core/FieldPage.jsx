import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import callbacksDemo from './examples/FieldCallbacks';
import lifecyclesDemo from './examples/FieldLifecycles';

const callbacks = require('!!raw-loader!./examples/FieldCallbacks.js'); // eslint-disable-line
const lifecycles = require('!!raw-loader!./examples/FieldLifecycles.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ComponentPage
      title="Field"
      description="Defines a form field which will be managed by the Form."
      parent="core"
    >
      <Showcase
        title="Field callbacks"
        description="Showcase of the field callbacks"
        component={callbacksDemo}
        code={callbacks}
      />

      <Showcase
        title="Value lifecycles"
        description="Showcase of the field lifecycle hooks"
        component={lifecyclesDemo}
        code={lifecycles}
      />
    </ComponentPage>
  );
}

export default FieldPage;
