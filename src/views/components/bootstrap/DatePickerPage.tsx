import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import simpleDatePickerDemo from './examples/SimpleDatePicker';

import SimpleDatePickerJs from '!!raw-loader!./examples/SimpleDatePicker.js';

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
        title="DatePicker"
        description="Showcase of a simple datepicker"
        component={simpleDatePickerDemo}
        code={SimpleDatePickerJs}
      />
    </ComponentPage>
  );
};
