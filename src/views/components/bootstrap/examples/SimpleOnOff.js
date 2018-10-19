import React from 'react';
import { Form, Field } from 'react-ocean-forms';
import { OnOffToggleButton } from 'react-ocean-forms-bootstrap';

function Example({ logMessage }) {
  // onChange callback
  const handleChange = (value) => {
    logMessage('onChange, value: ' + JSON.stringify(value));
  };

  // onBlur callback
  const handleBlur = () => {
    logMessage('onBlur');
  };

  return (
    <Form className="demo">
      <Field
        name="check"
        label="Sample toggle"
        onChange={handleChange}
        onBlur={handleBlur}
        component={OnOffToggleButton}
      />
    </Form>
  );
}

export default Example;
