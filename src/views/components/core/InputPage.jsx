import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import inputTypesDemo from './examples/InputTypes';
import customDemo from './examples/CustomInput';

const inputTypes = require('!!raw-loader!./examples/InputTypes.js'); // eslint-disable-line
const custom = require('!!raw-loader!./examples/CustomInput.js'); // eslint-disable-line

function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="Defines a form line containing a label and an input. Additionally it
      can render an info button and info alert as well as validation messages. If the user
      adds the required validator then it will mark the field as required as well."
      parent="core"
    >
      <Showcase
        title="Input types"
        description="Showcase of the input type support"
        component={inputTypesDemo}
        code={inputTypes}
      />

      <Showcase
        title="Custom input"
        description="Creating your own input components is quite simple. Note that if you
        want to use the flexible Intl support, you should put all your text outputs through
        meta.stringFormatter."
        component={customDemo}
        code={custom}
      />
    </ComponentPage>
  );
}

export default InputPage;
