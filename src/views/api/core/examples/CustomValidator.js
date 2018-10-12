import { Input } from 'react-ocean-forms';

const myValidator = (value) => {
  return value === 'OK' ? undefined : 'Value is not OK!';
};

<Input
  name="demo"
  label="lbl_demo"
  validators={[myValidator]}
/>
