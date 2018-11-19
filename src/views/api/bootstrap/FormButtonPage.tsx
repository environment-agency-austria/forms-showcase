import * as React from 'react';

import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';

import FormButtonJs from '!!raw-loader!./examples/FormButton.js';

export const FormButtonPage = (): JSX.Element => {
  return (
    <ApiPage
      title="FormButton"
      description="Defines a bootstrap button that integrates into the Form context.
      It will be disabled when the form is busy or disabled."
      codeExample={FormButtonJs}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <p>
        This component is just a wrapper for reactstrap buttons as a custom element inside
        the <Link to="../../core/form-button">Core Form-Button</Link>. It will pass all props
        to the underlying button. Please refer to
        the <a href="https://reactstrap.github.io/components/buttons/">reactstrap documentation</a> and
        the Form-Button documentation for the available props.
      </p>
    </ApiPage>
  );
};
