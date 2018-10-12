import React from 'react';
import { withField } from 'react-ocean-forms';

function CustomInput(props) {
  const { field, meta } = props;

  // Optional implementation of the plaintext feature
  if (meta.plaintext) {
    return field.value;
  }

  return (
    <input type="text" {...field} />
  );
}

export default withField(CustomInput);
