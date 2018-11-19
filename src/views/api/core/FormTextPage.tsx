import * as React from 'react';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import FormTextJs from '!!raw-loader!./examples/FormText.js';

export const FormTextPage = (): JSX.Element => {
  return (
    <ApiPage
      title="FormText"
      description="Wrapper for text output. It will use the Form.stringFormatter function
      to output the message passed through the props. Best practice for custom input component
      development is to pass every text output through the stringFormatter. This enables the
      user of the form to add the react-ocean-forms-react-intl package and get i18n support
      out of the box."
      codeExample={FormTextJs}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="text" type="String" required>
        Id of the message.
      </PropInfo>

      <PropInfo name="values" type="Object">
        Optional parameters that should be replaced in the message.
      </PropInfo>
    </ApiPage>
  );
};
