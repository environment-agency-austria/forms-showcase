import React from 'react';
import { Form, Input, FormButton } from 'react-ocean-forms';

function Example() {
  return (
    <Form className="demo" disabled>
      <Input
        name="input"
        label="Sample input"
        />

      <FormButton type="submit">Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
