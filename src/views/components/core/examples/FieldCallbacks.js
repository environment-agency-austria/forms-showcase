import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

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
        name="myInput"
        label="Example input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Input}
      />
    </Form>
  );
}

export default Example;
