import * as React from 'react';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/ValidationSummary.js'); // eslint-disable-line

export const ValidationSummaryPage = (): JSX.Element => {
  return (
    <ApiPage
      title="ValidationSummary"
      description="Displays a clickable list of errors from the current form. When an error is clicked,
      the corresponding input field is focused."
      codeExample={introExample}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="id" type="String" required>
        Id of this input. Will be used as the unique identifier of the div.<br />
        <strong>Must be unique form wide!</strong>
      </PropInfo>

      <PropInfo name="title" type="String">
        Message that will be used as the title, wrapped in a <mark>h4</mark>.
      </PropInfo>

      <PropInfo name="disableFocusOnSubmit" type="Boolean" defaultValue="false">
        If set to true the validation summary will stop automatically scrolling to itself
        when the user clicks on a submit button and the form is invalid.
      </PropInfo>

      <h2>Events</h2>
      <p>The <mark>ValidationSummary</mark> doesn't emit any events.</p>
    </ApiPage>
  );
};
