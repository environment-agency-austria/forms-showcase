import React from 'react';

import ApiPage from '../shared/ApiPage';

const introExample = require('!!raw-loader!./examples/FormButton.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="FormButton"
      description="Defines a bootstrap button that integrates into the Form context.
      It will be disabled when the form is busy or disabled."
      codeExample={introExample}
      parent="bootstrap"
    >
      <h2>Properties</h2>
      <p>
        This component is just a wrapper for reactstrap's buttons. It will pass all props
        to the underlying button. Please refer to the <a href="http://reactstrap.github.io/components/buttons/">reactstrap documentation</a> for
        the available props.
      </p>
    </ApiPage>
  );
}

export default FieldPage;
