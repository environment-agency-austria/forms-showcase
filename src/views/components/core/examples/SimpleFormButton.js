import React from 'react';
import { Form, Input, FormButton } from 'react-ocean-forms';

function asyncValidator(value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      if (value === '') {
        resolve('Invalid input');
      } else {
        resolve();
      }
    }, 1000);
  });
}

function Example({ logMessage }) {
  return (
    <Form className="demo">
      <Input
        name="input"
        label="Sample input"
        asyncValidators={[asyncValidator]}
      />

      <FormButton type="submit">Submit</FormButton>
      <FormButton type="reset">Reset</FormButton>
    </Form>
  );
}

export default Example;
