import React from 'react';
import { Form, validators } from 'react-ocean-forms';
import { Input } from 'react-ocean-forms-bootstrap';

function Example({ logMessage }) {
  // onChange callback
  const handleChange = (value) => {
    logMessage('onChange, value: ' + JSON.stringify(value));
  };

  // onBlur callback
  const handleBlur = () => {
    logMessage('onBlur');
  };

  return (
    <Form className="demo">
      <Input
        name="myInput"
        label="Normal input"
        onChange={handleChange}
        onBlur={handleBlur}
        />

      <Input
        name="requiredInput"
        label="Required input"
        onChange={handleChange}
        onBlur={handleBlur}
        validators={[validators.required]}
      />

      <Input
        name="infoInput"
        label="Info input"
        onChange={handleChange}
        onBlur={handleBlur}
        info="Custom info text!"
      />
    </Form>
  );
}

export default Example;
