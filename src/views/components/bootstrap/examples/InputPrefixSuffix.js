import React from 'react';
import { Form } from 'react-ocean-forms';
import { Input } from 'react-ocean-forms-bootstrap';
import { Button } from 'reactstrap';

function Example() {
  return (
    <Form className="demo">
      <Input
        name="prefixInput"
        label="With Prefix"
        prefix="Prefix text"
      />

      <Input
        name="customPrefixInput"
        label="Custom prefix"
        prefix={<Button>Prefix</Button>}
      />

      <Input
        name="suffixInput"
        label="With Suffix"
        suffix="Suffix text"
      />

      <Input
        name="customSuffixInput"
        label="Custom Suffix"
        suffix={<Button>Suffix</Button>}
      />
    </Form>
  );
}

export default Example;
