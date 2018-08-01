import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import formDemo from './examples/IntlFormExample';

const form = require('!!raw-loader!./examples/IntlFormExample.js'); // eslint-disable-line

function IntlFormPage() {
  return (
    <ComponentPage
      title="IntlForm"
      description="Drop-in replacement for regular Form component. Enables react-intl support.
      Must live inside a IntlProvider."
      parent="intl"
    >
      <Showcase
        title="Localized form"
        description="Showcase of the i18n support"
        component={formDemo}
        code={form}
      />
    </ComponentPage>
  );
}

export default IntlFormPage;
