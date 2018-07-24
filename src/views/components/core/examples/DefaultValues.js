import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

function Example({ logMessage }) {
  // Submit callback, here you'd make your api calls
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  // You can load those values from your backend
  const defaultValues = {
    myInput: 'default value',
  };

  return (
    <Form
      className="demo"
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
    >
      <Field name="myInput" label="Example input" component={Input} />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Example;
