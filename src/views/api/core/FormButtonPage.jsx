import React from 'react';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/FormButton.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="FormButton"
      description="Defines a button that integrates into the form context. It will
      be disabled when the form is busy or disabled. You can also pass submitArgs to
      the onSubmit handler this way."
      codeExample={introExample}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="type" type="String" defaultValue="submit">
        Type of the button, either <mark>submit</mark>, <mark>reset</mark> or <mark>button</mark>.
      </PropInfo>

      <PropInfo name="disabled" type="Boolean" defaultValue="false">
        True, if the button should be always disabled. If set to false it will be still disabled
        if the form context is busy or disabled.
      </PropInfo>

      <PropInfo name="submitArgs" type="Object">
        Optional object that will be passed as the second parameter to <mark>form.onSubmit</mark> if
        the button is of <mark>submit</mark> type.
      </PropInfo>

      <PropInfo name="component" type="React.Component">
        Can be used to render any other component other than the standard html <mark>button</mark>.
      </PropInfo>

      <PropInfo name="Other properties">
        The FormButton will pass all non FormButton properties directly through to the rendered component.
      </PropInfo>

      <h2>Events</h2>
      <p>The <mark>FormButton</mark> doesn't emit any events.</p>
    </ApiPage>
  );
}

export default FieldPage;
