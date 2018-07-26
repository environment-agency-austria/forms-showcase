import React from 'react';
import { Form, Field } from 'react-ocean-forms';
import { Input, FormButton } from 'react-ocean-forms-bootstrap';

function Example() {
  return (
    <Form className="demo" disabled>
      <Field
        name="input"
        label="Sample input"
        component={Input}
      />

      <FormButton type="submit" color="primary">Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
