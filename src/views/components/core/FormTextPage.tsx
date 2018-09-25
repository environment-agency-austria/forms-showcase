import * as  React from 'react';

import { Link } from 'react-router-dom';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import simpleDemo from './examples/SimpleFormText';

import SimpleFormTextJs from '!!raw-loader!./examples/SimpleFormText.js';

export const FormTextPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="FormText"
      description="Wrapper for text output. It will use the Form.stringFormatter function
      to output the message passed through the props. Best practice for custom input component
      development is to pass every text output through the stringFormatter. This enables the
      user of the form to add the react-ocean-forms-react-intl package and get i18n support
      out of the box."
      parent="core"
    >
      <Showcase
        title="FormText"
        description="Showcase of the form text"
        component={simpleDemo}
        code={SimpleFormTextJs}
      />

      <h2>Usage with i18n</h2>
      <p>
        The <mark>FormText</mark> component is best used in an internationalization context.
        The showcase page of <Link to="../intl/intl-form">IntlForm</Link> contains a <mark>FormText</mark> component
        as well.
      </p>
    </ComponentPage>
  );
};
