import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleValidationSummaryDemo from './examples/SimpleValidationSummary';

const simpleValidationSummary = require('!!raw-loader!./examples/SimpleValidationSummary.js'); // eslint-disable-line

function ValidationSummaryPage() {
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
        code={simpleValidationSummary}
      />
    </ComponentPage>
  );
}

export default ValidationSummaryPage;
