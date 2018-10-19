import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

function Example({ logMessage }) {
  const getDisplayValue = (value, meta) => {
    logMessage(
      'getDisplayValue, value: ' + JSON.stringify(value) +
      ', meta: ' + JSON.stringify(meta)
    );

    // This value will be used by the input when the field
    // loads its value from the form defaults.
    return 'display value: ' + value;
  };

  const getSubmitValue = (value, meta) => {
    logMessage(
      'getSubmitValue, value: ' + JSON.stringify(value) +
      ', meta: ' + JSON.stringify(meta)
    );

    // This value will be used by the validators and by the
    // form as the submitted value of the field.
    return value.replace('display value:', 'submit value: ');
  };

  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  return (
    <Form className="demo" onSubmit={handleSubmit}>
      <Field
        name="myInput"
        label="Example input"
        getDisplayValue={getDisplayValue}
        getSubmitValue={getSubmitValue}
        component={Input}
      />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
