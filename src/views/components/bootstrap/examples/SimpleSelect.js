import React from 'react';
import { Form, Field, validators } from 'react-ocean-forms';
import { Select } from 'react-ocean-forms-bootstrap';

function Example({ logMessage }) {
  // onChange callback
  const handleChange = (value) => {
    logMessage('onChange, value: ' + JSON.stringify(value));
  };

  // onBlur callback
  const handleBlur = () => {
    logMessage('onBlur');
  };

  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
  ];

  return (
    <Form className="demo">
      <Field
        name="myInput"
        label="Normal input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Select}
        options={options}
      />

      <Field
        name="requiredInput"
        label="Required input"
        onChange={handleChange}
        onBlur={handleBlur}
        component={Select}
        validators={[validators.required]}
        options={options}
      />
    </Form>
  );
}

export default Example;
