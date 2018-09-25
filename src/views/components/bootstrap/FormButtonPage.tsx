import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import simpleFormButtonDemo from './examples/SimpleFormButton';
// tslint:disable-next-line:ordered-imports
import disabledFormButtonDemo from './examples/DisabledFormButton';

const simpleFormButton = require('!!raw-loader!./examples/SimpleFormButton.js'); // eslint-disable-line
const disabledFormButton = require('!!raw-loader!./examples/DisabledFormButton.js'); // eslint-disable-line

export const FormButtonPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="FormButton"
      description="Defines a bootstrap button that integrates into the Form context.
      It will be disabled when the form is busy or disabled."
      parent="bootstrap"
    >
      <Showcase
        title="FormButton"
        description="Showcase of the form button"
        component={simpleFormButtonDemo}
        code={simpleFormButton}
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
