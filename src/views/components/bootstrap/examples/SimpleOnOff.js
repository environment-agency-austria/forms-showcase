import React from 'react';
import { Form } from 'react-ocean-forms';
import { OnOffToggleButton } from 'react-ocean-forms-bootstrap';

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
      <OnOffToggleButton
        name="check"
        label="Sample toggle"
        onChange={handleChange}
        onBlur={handleBlur}
        />
    </Form>
  );
}

export default Example;
