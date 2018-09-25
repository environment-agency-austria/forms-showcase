import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import callbacksDemo from './examples/FieldCallbacks';
// tslint:disable-next-line:import-name
import lifecyclesDemo from './examples/FieldLifecycles';

const callbacks = require('!!raw-loader!./examples/FieldCallbacks.js'); // eslint-disable-line
const lifecycles = require('!!raw-loader!./examples/FieldLifecycles.js'); // eslint-disable-line

export const FieldPage = (): JSX.Element => {
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
};
