import React from 'react';
import { Form, validators } from 'react-ocean-forms';
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
    { label: 'Option 1', value: "1" },
    { label: 'Option 2', value: "2" },
  ];

  return (
    <Form className="demo">
      <Select
        name="myInput"
        label="Normal input"
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
      />

      <Select
        name="requiredInput"
        label="Required input"
        onChange={handleChange}
        onBlur={handleBlur}
        validators={[validators.required]}
        options={options}
      />
    </Form>
  );
}

export default Example;
