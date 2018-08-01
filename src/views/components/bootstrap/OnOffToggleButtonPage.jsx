import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleOnOffDemo from './examples/SimpleOnOff';

const simpleOnOff = require('!!raw-loader!./examples/SimpleOnOff.js'); // eslint-disable-line

function OnOffToggleButtonPage() {
  return (
    <ComponentPage
      title="OnOffToggleButton"
      description="Defines a bootstrap button group that can be toggled between true and false."
      parent="bootstrap"
    >
      <Showcase
        title="Toggle button"
        description="Showcase of the toggle button"
        component={simpleOnOffDemo}
        code={simpleOnOff}
      />
    </ComponentPage>
  );
}

export default OnOffToggleButtonPage;
