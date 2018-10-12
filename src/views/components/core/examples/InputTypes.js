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
        label="Number input"
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
      />

      <Input
        name="myInput2"
        label="Date input"
        onChange={handleChange}
        onBlur={handleBlur}
        type="date"
      />
    </Form>
  );
}

export default Example;
