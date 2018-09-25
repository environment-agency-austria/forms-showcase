import * as React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import SelectJs from '!!raw-loader!./examples/Select.js';

export const SelectPage = (): JSX.Element => {
  return (
    <ApiPage
      title="Select"
      description="Defines a bootstrap form line containing a react-select dropdown. Additionally it can render
      an info button and info alert as well as validation messages. If the user adds the required validator then
      it will mark the field as required as well."
      codeExample={SelectJs}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="options" type="Array" required>
        An array of all items that can be selected. The array must contain of objects with
        the properties <mark>label</mark> and <mark>value</mark>.
      </PropInfo>

      <PropInfo name="multi" type="Boolean" defaultValue="false">
        Enable/disable multiselect. See the documentation of <mark>react-select</mark> for further details.
      </PropInfo>

      <PropInfo name="placeholder" type="String">
        A placeholder text that will be displayed by the dropdown while nothing is selected.
      </PropInfo>

      <PropInfo name="info" type="String">
        Message id of the info text that will be displayed along the input. If you don't
        want to use any i18n features you can pass a raw message instead.
      </PropInfo>

      <h2>Events</h2>
      <p>See <Link to="../../core/field">Field</Link> for event handling.</p>
    </ApiPage>
  );
};
