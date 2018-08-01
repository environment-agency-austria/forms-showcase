import React from 'react';
import { Form, Field, Input, FormButton } from 'react-ocean-forms';

function Example() {
  return (
    <Form className="demo" disabled>
      <Field
        name="input"
        label="Sample input"
        component={Input}
      />

      <FormButton type="submit">Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
