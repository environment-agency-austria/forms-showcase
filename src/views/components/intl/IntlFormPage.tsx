import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import formDemo from './examples/IntlFormExample';

const form = require('!!raw-loader!./examples/IntlFormExample.js'); // eslint-disable-line

export const IntlFormPage = (): JSX.Element => {
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
};
