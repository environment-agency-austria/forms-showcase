import React from 'react';
import { Form, Field, validators } from 'react-ocean-forms';
import { Input } from 'react-ocean-forms-bootstrap';

function Example() {
  return (
    <Form className="demo" plaintext>
      <Field
        name="myInput"
        label="Normal input"
        component={Input}
      />

      <Field
        name="requiredInput"
        label="Required input"
        component={Input}
        validators={[validators.required]}
      />

      <Field
        name="infoInput"
        label="Info input"
        component={Input}
        info="Custom info text!"
      />
    </Form>
  );
}

export default Example;
