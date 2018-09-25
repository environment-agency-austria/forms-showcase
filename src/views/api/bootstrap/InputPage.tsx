import * as React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import InputJs from '!!raw-loader!./examples/Input.js';

export const InputPage = (): JSX.Element => {
  return (
    <ApiPage
      title="Input"
      description="Defines a bootstrap form line containing a label and an input. Additionally it can
      render an info button and info alert as well as validation messages. If the user adds the required
      validator then it will mark the field as required as well."
      codeExample={InputJs}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="info" type="String">
        Message id of the info text that will be displayed along the input. If you don't
        want to use any i18n features you can pass a raw message instead.
      </PropInfo>

      <PropInfo name="prefix" type="String or Function">
        Displays a prefix in front of the input. Supports custom components as well.
      </PropInfo>

      <PropInfo name="suffix" type="String or Function">
        Displays a suffix after the input. Supports custom components as well.
      </PropInfo>

      <PropInfo name="type" type="String" defaultValue="text">
        HTML5 input type of the input element.
      </PropInfo>

      <h2>Events</h2>
      <p>See <Link to="../../core/field">Field</Link> for event handling.</p>
    </ApiPage>
  );
};
