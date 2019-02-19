import React from 'react';
import { Form, FieldGroup, Input } from 'react-ocean-forms';

/** Reusable contact person fields */
function ContactFields() {
  return (
    <React.Fragment>
      <Input name="first" label="First name" />
      <Input name="last" label="Last name" />
    </React.Fragment>
  );
}

function Example({ logMessage }) {
  const handleSubmit = (values) => {
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  return (
    <Form className="demo" onSubmit={handleSubmit}>
      <FieldGroup
        name="mainContact"
        label="Main contact"
        render={() => {
          return (
            <React.Fragment>
              <strong>Main contact</strong>
              <ContactFields />
            </React.Fragment>
          );
        }}
      />

      <FieldGroup
        name="technicalContact"
        label="Technical contact"
        render={() => {
          return (
            <div className="mt-4">
              <strong>Technical contact</strong>
              <ContactFields />
            </div>
          );
        }}
      />

      <FieldGroup
        name="disabledContact"
        label="Disabled contact"
        disabled
        render={() => {
          return (
            <div className="mt-4">
              <strong>Disabled contact</strong>
              <ContactFields />
            </div>
          );
        }}
      />

      <FieldGroup
        name="plaintextContact"
        label="Plaintext contact"
        plaintext
        values={{
          first: 'Foo',
          last: 'Bar',
        }}
        render={() => {
          return (
            <div className="mt-4">
              <strong>Plaintext contact</strong>
              <ContactFields />
            </div>
          );
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Example;
