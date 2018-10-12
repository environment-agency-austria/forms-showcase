import React from 'react';
import { Form, validators } from 'react-ocean-forms';
import { Input, ValidationSummary } from 'react-ocean-forms-bootstrap';

function Example() {
  return (
    <Form className="demo">
      <ValidationSummary id="demoSummary" />

      <Input
        name="requiredInput"
        label="Required input"
        validators={[validators.required]}
      />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
