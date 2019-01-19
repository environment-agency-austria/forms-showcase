import React from 'react';
import { Form, validators } from 'react-ocean-forms';
import { Input } from 'react-ocean-forms-bootstrap';

function Example() {
  return (
    <Form className="demo" plaintext>
      <Input
        name="myInput"
        label="Normal input"
        defaultValue="Example text"
        />

      <Input
        name="requiredInput"
        label="Required input"
        validators={[validators.required]}
      />

      <Input
        name="infoInput"
        label="Info input"
        info="Custom info text!"
        defaultValue="Lorem ipsum ..."
      />
    </Form>
  );
}

export default Example;
