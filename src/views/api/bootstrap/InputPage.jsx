import React from 'react';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/Input.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="Input"
      description="Defines a bootstrap form line containing a label and an input. Additionally it can
      render an info button and info alert as well as validation messages. If the user adds the required
      validator then it will mark the field as required as well."
      codeExample={introExample}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="info" type="String">
        Message id of the info text that will be displayed along the input. If you don't
        want to use any i18n features you can pass a raw message instead.
      </PropInfo>

      <PropInfo name="type" type="String" defaultValue="text">
        HTML5 input type of the input element.
      </PropInfo>

      <h2>Events</h2>
      <p>See <mark>Field</mark> for event handling.</p>
    </ApiPage>
  );
}

export default FieldPage;
