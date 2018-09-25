import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import disabledFormButtonDemo from './examples/DisabledFormButton';
// tslint:disable-next-line:import-name
import submitArgsDemo from './examples/FormButtonSubmitArgs';
// tslint:disable-next-line:import-name
import simpleFormButtonDemo from './examples/SimpleFormButton';

const simpleFormButton = require('!!raw-loader!./examples/SimpleFormButton.js'); // eslint-disable-line
const disabledFormButton = require('!!raw-loader!./examples/DisabledFormButton.js'); // eslint-disable-line
const submitArgs = require('!!raw-loader!./examples/FormButtonSubmitArgs.js'); // eslint-disable-line

export const FormButtonPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="FormButton"
      description="Defines a button that integrates into the form context. It will
      be disabled when the form is busy or disabled. You can also pass submitArgs to
      the onSubmit handler this way."
      parent="core"
    >
      <Showcase
        title="FormButton"
        description="Showcase of the form button"
        component={simpleFormButtonDemo}
        code={simpleFormButton}
      />

      <Showcase
        title="Submit args"
        description="Arguments to the form.onSubmit handler can be passed this way"
        component={submitArgsDemo}
        code={submitArgs}
      />

      <Showcase
        title="Disabled form"
        description="FormButtons are disabled if the form is disabled too"
        component={disabledFormButtonDemo}
        code={disabledFormButton}
      />
    </ComponentPage>
  );
};
