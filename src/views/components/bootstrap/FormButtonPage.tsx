import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import disabledFormButtonDemo from './examples/DisabledFormButton';
import simpleFormButtonDemo from './examples/SimpleFormButton';

import DisabledFormButtonJs from '!!raw-loader!./examples/DisabledFormButton.js';
import SimpleFormButtonJs from '!!raw-loader!./examples/SimpleFormButton.js';

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
        code={SimpleFormButtonJs}
      />

      <Showcase
        title="Disabled form"
        description="FormButtons are disabled if the form is disabled too"
        component={disabledFormButtonDemo}
        code={DisabledFormButtonJs}
      />
    </ComponentPage>
  );
};
