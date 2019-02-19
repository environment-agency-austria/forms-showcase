import React from 'react';
import { Form } from 'react-ocean-forms';
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
    <Form className="demo" plaintext>
      <Select
        name="myInput"
        label="Normal input"
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        defaultValue={options[0]}
      />

      <Select
        name="multiInput"
        label="Multi input"
        multi
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        defaultValue={options}
      />
    </Form>
  );
}

export default Example;
