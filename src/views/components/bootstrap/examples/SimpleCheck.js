import React from 'react';
import { Form, Field } from 'react-ocean-forms';
import { Check } from 'react-ocean-forms-bootstrap';

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
        label="Sample checkbox"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Check}
      />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
