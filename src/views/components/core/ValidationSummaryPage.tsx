import React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleDemo from './examples/SimpleValidationSummary';

import SimpleValidationSummaryJs from '!!raw-loader!./examples/SimpleValidationSummary.js';

export const ValidationSummaryPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="ValidationSummary"
      description="Displays a clickable list of errors from the current form.
      When an error is clicked, the corresponding input field is focused."
      parent="core"
    >
      <Showcase
        title="Showcase"
        description="Showcase of the validation summary. Click on submit to display the summary."
        component={simpleDemo}
        code={SimpleValidationSummaryJs}
      />
    </ComponentPage>
  );
};
