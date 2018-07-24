import React from 'react';
import { Form, Field, Input, ValidationSummary, validators } from 'react-ocean-forms';

function Example({ logMessage }) {
  return (
    <Form className="demo">
      <ValidationSummary id="summary" />

      <Field
        name="input1"
        label="Example input 1"
        component={Input}
        validators={[validators.required]}
      />

      <Field
        name="input2"
        label="Example input 2"
        component={Input}
        validators={[validators.required]}
      />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
