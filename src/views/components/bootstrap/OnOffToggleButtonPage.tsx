import * as React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleOnOffDemo from './examples/SimpleOnOff';

import SimpleOnOffJs from '!!raw-loader!./examples/SimpleOnOff.js';

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
        code={SimpleOnOffJs}
      />
    </ComponentPage>
  );
};
