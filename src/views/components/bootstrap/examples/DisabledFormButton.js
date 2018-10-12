import React from 'react';
import { Form } from 'react-ocean-forms';
import { Input, FormButton } from 'react-ocean-forms-bootstrap';

function Example() {
  return (
    <Form className="demo" disabled>
      <Input
        name="input"
        label="Sample input"
        />

      <FormButton type="submit" color="primary">Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
