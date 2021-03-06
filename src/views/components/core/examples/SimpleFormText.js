import React from 'react';
import { Form, FormText } from 'react-ocean-forms';

function Example() {
  return (
    <Form>
      <p>
        <FormText
          text="Demo output"
        />
      </p>

      <p>
        <FormText
          text="Output with parameters: {param}"
          values={{ param: 'Demo value' }}
        />
      </p>
    </Form>
  );
}

export default Example;
