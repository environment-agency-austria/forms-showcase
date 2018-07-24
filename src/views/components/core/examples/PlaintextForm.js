import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

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
      <Field name="myInput" label="Example input 1" component={Input} />
      <Field name="myInput2" label="Example input 2" component={Input} />
    </Form>
  );
}

export default Example;
