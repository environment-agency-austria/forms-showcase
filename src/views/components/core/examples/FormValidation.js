import React from 'react';
import { Form, Input, ValidationSummary } from 'react-ocean-forms';

function Example({ logMessage }) {
  // Submit callback, here you'd make your api calls
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  // Reset callback, can be useful in some cases for cleanup
  const handleReset = () => {
    logMessage('onReset');
  };

  // Form wide validation function
  const handleValidate = (values) => {
    if (values.demoInput === 'bad') {
      return {
        demoInput: 'Invalid input!',
      };
    }

    return null;
  };

  return (
    <Form
      className="demo"
      onSubmit={handleSubmit}
      onReset={handleReset}
      onValidate={handleValidate}
    >
      <ValidationSummary id="summary" />

      <Input name="demoInput" label="Example input" />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
