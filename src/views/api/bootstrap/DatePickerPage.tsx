import * as React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import DatePickerJs from '!!raw-loader!./examples/DatePicker.js';

export const DatePickerPage = (): JSX.Element => {
  return (
    <ApiPage
      title="DatePicker"
      description="Defines a bootstrap form line containing a label and a react-datetime input.
      Additionally it can render an info button and info alert as well as validation messages.
      If the user adds the required validator then it will mark the field as required as well."
      codeExample={DatePickerJs}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="dateFormat" type="Boolean or String" defaultValue="true">
        Moment.js date format. See the <a href="https://github.com/YouCanBookMe/react-datetime#api">react-datetime</a> api
        for more information.
      </PropInfo>

      <PropInfo name="timeFormat" type="Boolean or String" defaultValue="true">
        Moment.js time format. See the <a href="https://github.com/YouCanBookMe/react-datetime#api">react-datetime</a> api
        for more information.
      </PropInfo>

      <PropInfo name="info" type="String">
        Message id of the info text that will be displayed along the input. If you don't
        want to use any i18n features you can pass a raw message instead.
      </PropInfo>

      <PropInfo name="placeholder" type="String">
        A placeholder text that will be displayed by the dropdown while nothing is selected.
      </PropInfo>

      <h2>Events</h2>
      <p>See <Link to="../../core/field">Field</Link> for event handling.</p>
    </ApiPage>
  );
};
