import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

function Example({ logMessage }) {
  // Submit callback, here you'd make your api calls
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  return (
    <Form
      className="demo"
      onSubmit={handleSubmit}
      disabled
    >
      <Field name="myInput" label="Example input 1" component={Input} />
      <Field name="myInput2" label="Example input 2" component={Input} />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Example;
