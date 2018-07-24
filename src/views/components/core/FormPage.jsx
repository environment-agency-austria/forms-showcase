import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleFormDemo from './examples/SimpleForm';
import defaultValuesDemo from './examples/DefaultValues';
import formValidationDemo from './examples/FormValidation';

const defaultValues = require('!!raw-loader!./examples/DefaultValues.js'); // eslint-disable-line
const simpleForm = require('!!raw-loader!./examples/SimpleForm.js'); // eslint-disable-line
const formValidation = require('!!raw-loader!./examples/FormValidation.js'); // eslint-disable-line

function FormPage() {
  return (
    <ComponentPage
      title="Form"
      description="The form is the main component. It glues together all the
      Form logic through React's new Context api."
      parent="core"
    >
      <Showcase
        title="Simple form"
        description="Showcase of a simple form"
        component={simpleFormDemo}
        code={simpleForm}
      />

      <Showcase
        title="Default values"
        description="Provide the form with values that should be displayed on load."
        component={defaultValuesDemo}
        code={defaultValues}
      />

      <Showcase
        title="Form-wide validation"
        description="Use a form-wide validation function before submit. Notice that
        the onSubmit callback is not invoked if you type 'bad' into the input."
        component={formValidationDemo}
        code={formValidation}
      />
    </ComponentPage>
  );
}

export default FormPage;
