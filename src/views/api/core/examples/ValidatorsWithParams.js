import { Field, Input, validators } from 'react-ocean-forms';

<Field
  name="demo"
  label="lbl_demo"
  component={Input}
  validators={[validators.withParam(validators.minLength, 5)]}
/>
