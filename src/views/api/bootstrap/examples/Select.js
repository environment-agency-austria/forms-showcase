import { Field } from 'react-ocean-forms';
import { Select } from 'react-ocean-forms-bootstrap';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
];

<Field
  name="demo"
  label="lbl_demo"
  component={Select}
  options={options}
/>
