import React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleDatePickerDemo from './examples/SimpleDatePicker';
import plaintextDatePickerDemo from './examples/PlaintextDatePicker';

import SimpleDatePickerJs from '!!raw-loader!./examples/SimpleDatePicker.js';
import PlaintextDatePickerJs from '!!raw-loader!./examples/PlaintextDatePicker.js';

export const DatePickerPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="DatePicker"
      description="Defines a bootstrap form line containing a label and a react-datetime input.
      Additionally it can render an info button and info alert as well as validation messages.
      If the user adds the required validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="react-datetime"
        description="Showcase of a simple datepicker using react-datetime in the background"
        component={simpleDatePickerDemo}
        code={SimpleDatePickerJs}
      />

      <Showcase
        title="Plaintext support"
        description="Support for plaintext mode is provided out of the box."
        component={plaintextDatePickerDemo}
        code={PlaintextDatePickerJs}
      />
    </ComponentPage>
  );
};
