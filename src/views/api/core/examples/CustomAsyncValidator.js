import { Field, Input } from 'react-ocean-forms';
import { CustomApi } from './myCustomApi';

const myValidator = async (value) => {
  const result = await CustomApi.validateAtBackend(value);
  if (result.valid === true) {
    return undefined;
  }

  return 'Invalid value';
};

<Field
  name="demo"
  label="lbl_demo"
  component={Input}
  asyncValidators={[myValidator]}
/>
