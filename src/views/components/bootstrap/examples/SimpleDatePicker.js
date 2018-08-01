import React from 'react';
import { Form, Field } from 'react-ocean-forms';
import { DatePicker } from 'react-ocean-forms-bootstrap';

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
      <Field
        name="datePicker"
        label="Sample date picker"
        onChange={handleChange}
        onBlur={handleBlur}
        component={DatePicker}
        dateFormat="DD.MM.YYYY"
      />

      <Field
        name="timePicker"
        label="Sample time picker"
        onChange={handleChange}
        onBlur={handleBlur}
        component={DatePicker}
        timeFormat="HH:mm"
      />
    </Form>
  );
}

export default Example;
