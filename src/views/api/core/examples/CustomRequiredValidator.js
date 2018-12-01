import { Input } from 'react-ocean-forms';

const myRequiredValidator = (value) => {
  return value === 'OK' ? undefined : 'Value is not OK!';
};
myRequiredValidator.isDefaultValidator = true;

<Input
  name="demo"
  label="lbl_demo"
  validators={[myValidator]}
/>
