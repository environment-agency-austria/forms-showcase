import React from 'react';
import { Form, Field } from 'react-ocean-forms';
import { Input } from 'react-ocean-forms-bootstrap';
import { Button } from 'reactstrap';

function Example() {
  return (
    <Form className="demo">
      <Field
        name="prefixInput"
        label="With Prefix"
        component={Input}
        prefix="Prefix text"
      />

      <Field
        name="customPrefixInput"
        label="Custom prefix"
        component={Input}
        prefix={<Button>Prefix</Button>}
      />

      <Field
        name="suffixInput"
        label="With Suffix"
        component={Input}
        suffix="Suffix text"
      />

      <Field
        name="customSuffixInput"
        label="Custom Suffix"
        component={Input}
        suffix={<Button>Suffix</Button>}
      />
    </Form>
  );
}

export default Example;
