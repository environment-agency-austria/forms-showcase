import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import inputTypesDemo from './examples/InputTypes';
// tslint:disable-next-line:import-name
import plaintextDemo from './examples/PlainTextInput';
// tslint:disable-next-line:ordered-imports
import prefixSuffixDemo from './examples/InputPrefixSuffix';

import InputPrefixSuffixJs from '!!raw-loader!./examples/InputPrefixSuffix.js';
import InputTypesJs from '!!raw-loader!./examples/InputTypes.js';
import PlainTextInputJs from '!!raw-loader!./examples/PlainTextInput.js';

export const InputPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="Input"
      description="Defines a bootstrap form line containing a label and an input. Additionally it can
      render an info button and info alert as well as validation messages. If the user adds the required
      validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="Bootstrap input"
        description="Showcase of the bootstrap input"
        component={inputTypesDemo}
        code={InputTypesJs}
      />

      <Showcase
        title="Prefix and suffix"
        description="Bootstraps prefix and suffix are also supported."
        component={prefixSuffixDemo}
        code={InputPrefixSuffixJs}
      />

      <Showcase
        title="Plaintext mode"
        description="All inputs from this package support the plaintext mode as well."
        component={plaintextDemo}
        code={PlainTextInputJs}
      />
    </ComponentPage>
  );
};
