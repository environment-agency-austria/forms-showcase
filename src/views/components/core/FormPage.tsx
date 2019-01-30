import React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import defaultValuesDemo from './examples/DefaultValues';
import disabledDemo from './examples/DisabledForm';
import formValidationDemo from './examples/FormValidation';
import valuesDemo from './examples/FormValues';
import plaintextDemo from './examples/PlaintextForm';
import simpleFormDemo from './examples/SimpleForm';

import DefaultValuesJs from '!!raw-loader!./examples/DefaultValues.js';
import DisabledFormJs from '!!raw-loader!./examples/DisabledForm.js';
import FormValidationJs from '!!raw-loader!./examples/FormValidation.js';
import FormValuesJs from '!!raw-loader!./examples/FormValues.js';
import PlaintextFormJs from '!!raw-loader!./examples/PlaintextForm.js';
import SimpleFormJs from '!!raw-loader!./examples/SimpleForm.js';

export const FormPage = (): JSX.Element => {
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
        code={SimpleFormJs}
      />

      <Showcase
        title="Default values"
        description="Provide the form with default values that should be displayed on load.
        Note how the default value won't update the Field, if the user changed the input.
        However, on form reset the default value will be used again."
        component={defaultValuesDemo}
        code={DefaultValuesJs}
      />

      <Showcase
        title="Values"
        description="Override the values of the form fields. Changing those values will override
        the Field value, even if the user changed it."
        component={valuesDemo}
        code={FormValuesJs}
      />

      <Showcase
        title="Disabled form"
        description="Setting the disabled prop will disable all form fields."
        component={disabledDemo}
        code={DisabledFormJs}
      />

      <Showcase
        title="Plaintext form"
        description="Setting the plaintext prop will show all form fields in a text-only mode."
        component={plaintextDemo}
        code={PlaintextFormJs}
      />

      <Showcase
        title="Form-wide validation"
        description="Use a form-wide validation function before submit. Notice that
        the onSubmit callback is not invoked if you type 'bad' into the input."
        component={formValidationDemo}
        code={FormValidationJs}
      />
    </ComponentPage>
  );
};
