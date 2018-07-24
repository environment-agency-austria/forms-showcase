import { Field, Input } from 'react-ocean-forms';

const myValidator = (value) => {
  return value === 'OK' ? undefined : 'Value is not OK!';
};

<Field
  name="demo"
  label="lbl_demo"
  component={Input}
  validators={[myValidator]}
/>
