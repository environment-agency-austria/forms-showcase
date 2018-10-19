import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleFormButtonDemo from './examples/SimpleFormButton';
import disabledFormButtonDemo from './examples/DisabledFormButton';

const simpleFormButton = require('!!raw-loader!./examples/SimpleFormButton.js'); // eslint-disable-line
const disabledFormButton = require('!!raw-loader!./examples/DisabledFormButton.js'); // eslint-disable-line

function FormButtonPage() {
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
}

export default FormButtonPage;
