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
    <Form className="demo" plaintext>
      <DatePicker
        name="datePicker"
        label="Date picker"
        onChange={handleChange}
        onBlur={handleBlur}
        dateFormat="DD.MM.YYYY"
        defaultValue="2019-01-17T00:00:00+01:00"
      />

      <DatePicker
        name="timePicker"
        label="Time picker"
        onChange={handleChange}
        onBlur={handleBlur}
        dateFormat={false}
        timeFormat="HH:mm"
        defaultValue="2019-01-01T05:06:00+01:00"
      />
    </Form>
  );
}

export default Example;
