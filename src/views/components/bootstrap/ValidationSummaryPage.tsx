import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleValidationSummaryDemo from './examples/SimpleValidationSummary';

import SimpleValidationSummaryJs from '!!raw-loader!./examples/SimpleValidationSummary.js';

export const ValidationSummaryPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="ValidationSummary"
      description="Displays a clickable list of errors from the current form. When an error is clicked,
      the corresponding input field is focused."
      parent="bootstrap"
    >
      <Showcase
        title="DatePicker"
        description="Showcase of a simple validation summary. Push submit to see the error."
        component={simpleValidationSummaryDemo}
        code={SimpleValidationSummaryJs}
      />
    </ComponentPage>
  );
};
