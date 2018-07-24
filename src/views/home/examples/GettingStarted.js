import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

class GettingStarted extends React.Component {
  handleSubmit(values) {
    console.log('form submitted with', values);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field name="myInput" label="Example input" component={Input} />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default GettingStarted;
