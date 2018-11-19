import React from 'react';
import { Form, Input } from 'react-ocean-forms';

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
      <Input
        name="myInput"
        label="Example input"
        onChange={handleChange}
        onBlur={handleBlur}
        />
    </Form>
  );
}

export default Example;
