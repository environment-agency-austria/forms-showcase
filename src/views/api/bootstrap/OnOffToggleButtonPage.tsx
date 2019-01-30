import React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import OnOffToggleButtonJs from '!!raw-loader!./examples/OnOffToggleButton.js';

export const OnOffToggleButtonPage = (): JSX.Element => {
  return (
    <ApiPage
      title="OnOffToggleButton"
      description="Defines a bootstrap button group that can be toggled between true and false."
      codeExample={OnOffToggleButtonJs}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <PropInfo name="onLabel" type="String" defaultValue="ojs_togglebutton_on (On)">
        Message id of the info text that will be displayed for the "on" button.
        If you don't want to use any i18n features you can pass a raw message instead.
      </PropInfo>

      <PropInfo name="offLabel" type="String" defaultValue="ojs_togglebutton_on (Off)">
        Message id of the info text that will be displayed for the "off" button.
        If you don't want to use any i18n features you can pass a raw message instead.
      </PropInfo>

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

      <h2>Events</h2>
      <p>See <Link to="../../core/field">Field</Link> for event handling.</p>
    </ApiPage>
  );
};
