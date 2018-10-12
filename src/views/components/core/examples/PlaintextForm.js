import React from 'react';
import { Form, Input } from 'react-ocean-forms';

function Example({ logMessage }) {
  const defaultValues = {
    myInput: 'default value 1',
    myInput2: 'default value 2',
  };

  return (
    <Form
      className="demo"
      defaultValues={defaultValues}
      plaintext
    >
      <Input name="myInput" label="Example input 1" />
      <Input name="myInput2" label="Example input 2" />
    </Form>
  );
}

export default Example;
