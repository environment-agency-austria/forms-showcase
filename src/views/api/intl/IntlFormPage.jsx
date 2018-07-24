import React from 'react';

import ApiPage from '../shared/ApiPage';

const introExample = require('!!raw-loader!./examples/IntlForm.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="IntlForm"
      description="Drop-in replacement for regular Form component. Enables react-intl support.
      Must live inside a IntlProvider."
      codeExample={introExample}
      parent="intl"
    >
      <h2>Properties</h2>
      <p>See <mark>Form</mark> for properties.</p>

      <h2>Events</h2>
      <p>See <mark>Form</mark> for event handling.</p>
    </ApiPage>
  );
}

export default FieldPage;
