import React from 'react';
import { Form, FieldGroup, Field, Input } from 'react-ocean-forms';

/** Reusable contact person fields */
function ContactFields() {
  return (
    <React.Fragment>
      <Field name="first" label="First name" component={Input} />
      <Field name="last" label="Last name" component={Input} />
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
            <React.Fragment>
              <strong>Technical contact</strong>
              <ContactFields />
            </React.Fragment>
          );
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Example;
