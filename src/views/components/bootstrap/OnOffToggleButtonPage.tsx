import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

// tslint:disable-next-line:import-name
import simpleOnOffDemo from './examples/SimpleOnOff';

const simpleOnOff = require('!!raw-loader!./examples/SimpleOnOff.js'); // eslint-disable-line

export const OnOffToggleButtonPage = (): JSX.Element => {
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
};
