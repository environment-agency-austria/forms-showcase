import React from 'react';
import { Form, withField } from 'react-ocean-forms';

/**
 * Simple implementation of a custom input
 */
function BaseCustomInput(props) {
  const {
    field,
    label,
    type,
    meta,
    customProp,
  } = props;


  return (
    <div>
      <div>
        <label htmlFor={field.id}>
          <strong>{meta.stringFormatter(label)}</strong>
        </label>
      </div>
      <input type={type} {...field} />
      {customProp}
    </div>
  );
}
const CustomInput = withField(BaseCustomInput);

function Example({ logMessage }) {
  // Submit callback, here you'd make your api calls
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  // onChange callback
  const handleChange = (value) => {
    logMessage('onChange, value: ' + JSON.stringify(value));
  };

  // onBlur callback
  const handleBlur = () => {
    logMessage('onBlur');
  };

  return (
    <Form className="demo" onSubmit={handleSubmit}>
      <CustomInput
        name="myCustomInput"
        label="Input with info text"
        onChange={handleChange}
        onBlur={handleBlur}
        customProp="custom text"
      />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </Form>
  );
}

export default Example;
