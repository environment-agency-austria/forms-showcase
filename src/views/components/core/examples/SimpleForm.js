import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

function Example({ logMessage }) {
  // Submit callback, here you'd make your api calls
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  // Reset callback, can be useful in some cases for cleanup
  const handleReset = () => {
    logMessage('onReset');
  };

  return (
    <Form
      className="demo"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Field name="myInput" label="Example input" component={Input} />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
