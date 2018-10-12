import React from 'react';
import { Form } from 'react-ocean-forms';
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
      <Check
        name="check"
        label="Sample checkbox"
        onChange={handleChange}
        onBlur={handleBlur}
        />
    </Form>
  );
}

export default Example;
