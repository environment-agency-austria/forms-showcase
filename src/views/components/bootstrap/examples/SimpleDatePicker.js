import React from 'react';
import { Form } from 'react-ocean-forms';
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
      <DatePicker
        name="datePicker"
        label="Sample date picker"
        onChange={handleChange}
        onBlur={handleBlur}
        dateFormat="DD.MM.YYYY"
      />

      <DatePicker
        name="timePicker"
        label="Sample time picker"
        onChange={handleChange}
        onBlur={handleBlur}
        dateFormat={false}
        timeFormat="HH:mm"
      />
    </Form>
  );
}

export default Example;
