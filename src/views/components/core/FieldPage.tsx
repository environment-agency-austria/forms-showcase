import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import callbacksDemo from './examples/FieldCallbacks';
import lifecyclesDemo from './examples/FieldLifecycles';

import FieldCallbacksJs from '!!raw-loader!./examples/FieldCallbacks.js';
import FieldLifecyclesJs from '!!raw-loader!./examples/FieldLifecycles.js';

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
        code={FieldCallbacksJs}
      />

      <Showcase
        title="Value lifecycles"
        description="Showcase of the field lifecycle hooks"
        component={lifecyclesDemo}
        code={FieldLifecyclesJs}
      />
    </ComponentPage>
  );
};
