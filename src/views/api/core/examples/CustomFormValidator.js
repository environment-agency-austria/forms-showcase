import { Form, Field, Input } from 'react-ocean-forms';

const myValidator = (values) => {
  if (values.first === 'John' && values.last === 'Doe') {
    return {
      // This will mark both fields as invalid with
      // the given error messages.
      first: 'Invalid name!',
      last: 'Invalid name!',
    };
  }

  return null;
};

<Form onValidate={myValidator}>
  <Field name="first" label="First name" component={Input} />
  <Field name="last" label="Last name" component={Input} />
</Form>
