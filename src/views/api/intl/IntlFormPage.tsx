import React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';

import IntlFormJs from '!!raw-loader!./examples/IntlForm.js';

export const IntlFormPage = (): JSX.Element => {
  return (
    <ApiPage
      title="IntlForm"
      description="Drop-in replacement for regular Form component. Enables react-intl support.
      Must live inside a IntlProvider."
      codeExample={IntlFormJs}
      parent="intl"
    >
      <h2>Properties</h2>
      <p>See <Link to="../../core/form">Form</Link> for properties.</p>

      <h2>Events</h2>
      <p>See <Link to="../../core/form">Form</Link> for event handling.</p>
    </ApiPage>
  );
};
