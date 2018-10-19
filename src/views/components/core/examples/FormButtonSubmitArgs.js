import React from 'react';
import { Form, Field, Input, FormButton } from 'react-ocean-forms';

function Example({ logMessage }) {
  const handleSubmit = (values, submitArgs) => {
    logMessage(
      'onSubmit, values: ' + JSON.stringify(values) +
      ', submitArgs: ' + JSON.stringify(submitArgs)
    );
  };

  return (
    <Form className="demo" onSubmit={handleSubmit}>
      <Field
        name="input"
        label="Sample input"
        component={Input}
      />

      <FormButton type="submit" submitArgs={{ foo: 'bar' }}>Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
