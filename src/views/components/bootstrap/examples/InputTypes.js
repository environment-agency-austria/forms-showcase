import React from 'react';
import { Form, Field, validators } from 'react-ocean-forms';
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
      <Field
        name="myInput"
        label="Normal input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Input}
      />

      <Field
        name="requiredInput"
        label="Required input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Input}
        validators={[validators.required]}
      />

      <Field
        name="infoInput"
        label="Info input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Input}
        info="Custom info text!"
      />
    </Form>
  );
}

export default Example;
