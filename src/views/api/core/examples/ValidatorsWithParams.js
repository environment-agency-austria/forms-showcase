import { Input, validators } from 'react-ocean-forms';

<Input
  name="demo"
  label="lbl_demo"
  validators={[validators.withParam(validators.minLength, 5)]}
/>
